import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { changeProductState } from "../Redux/Reducer";
import { updateProductState } from "../Redux/Reducer";

//STATUS PENDING = 0
//STATUS APPROVED = 1
//STATUS MISSING=2
//STATUS MISSING URGENT =3
const Table = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [pop, setpop] = useState(false);
  const [selected, setSlected] = useState();

  const Display = useSelector((state) => state.Display);
  const [num, setnum] = useState();

  const ProductStateChange = (selected, status) => {
    try {
      dispatch(changeProductState({ selected, status }));
    } catch (error) {}
     
  };

  const ProductStateChanges = (num, status,selected) => {
    try {
      dispatch(updateProductState({ num, status,selected }));
    } catch (error) {}
  }
  const handleQuantityChange = (e) => {
    setnum(num + 1);
    // You can add logic to update the total based on quantity
  };
  const handleQuantityChanges = (e) => {
    if (num >= 1) {
      setnum(num - 1);
    } else {
      // return setnum(1);
    }

    // You can add logic to update the total based on quantity
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <Input type="text" placeholder="Search" />
        <Link to="/store">
          <Button
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Add Item
          </Button>
        </Link>
      </div>

      <Tables>
        <thead>
          <tr>
            <TableHeader> </TableHeader>
            <TableHeader>Product Name</TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {Display.map((product) => (
            <TableRow key={product.name}>
              <TableCell>
                <img
                  src={process.env.PUBLIC_URL + product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>${product.total}</TableCell>
              <TableCell>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/correct.png"}
                    alt="Correct"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    onClick={() => {
                      //   setSlected(product);
                      ProductStateChange(product, 1);
                    }}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/wrong.jpg"}
                    alt="Wrong"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    onClick={() => {
                      setOpen(true);
                      setSlected(product);
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: getStatusColor(product?.status),
                    borderRadius: "10px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {product?.status === 1 && <div> Approved</div>}
                  {product?.status === 2 && <div>Missing</div>}
                  {product?.status === 3 && <div>Missing-Urgent</div>}
                  {product?.status === 4 && <div>priceUpdated</div>}
                  {product?.status === 5 && <div>quantityUpdated</div>}
                 
                </div>
                <p
                  onClick={() => {
                    setpop(true);
                    setSlected(product);
                    setnum(selected?.quantity);
                  }}
                >
                   
                  Edit
                </p>
              </TableCell>
            </TableRow>
          ))}
          {/* Add more rows as needed */}
        </tbody>
      </Tables>
      <Modal
        title="Missing Product"
        centered
        closable={false}
        open={open}
        onOk={() => {
          ProductStateChange(selected, 3);
          setOpen(false);
        }}
        onCancel={() => {
          ProductStateChange(selected, 2);
          setOpen(false);
        }}
        width={500}
        okText="Yes"
        cancelText="no"
      >
        is {selected?.name},Is this very urgent?
      </Modal>
      <Modal
        title="lorem"
        centered
        closable={false}
        open={pop}
        onOk={() => {
          ProductStateChanges(num, 5,selected);
          setpop(false);
        }}
        onCancel={() => {
          setpop(false);
        }}
        width={600}
        okText="send"
        cancelText="cancel"
      >
        {setpop && (
          <>
            <div className="popup">
              <img
                src="/Apple.png"
                alt="Product Image"
                style={{
                  float: "right",
                  maxWidth: "200px",
                  maxHeight: "350px",
                }}
              />
              <p style={{ marginBottom: "1cm" }}>Price: {selected?.price}</p>
              <label htmlFor="quantity" style={{ marginBottom: "1cm" }}>
                Quantity:
              </label>
              <button
                onClick={handleQuantityChange}
                style={{ borderRadius: "20px", background: "green" }}
              >
                +
              </button>
              <button>{num}</button>
              <button
                onClick={handleQuantityChanges}
                style={{ borderRadius: "20px", background: "green" }}
              >
                -
              </button>
              <p style={{ marginBottom: "1cm" }}>
                Total: ${selected?.price * num}
              </p>
            </div>
            <div>
              <label htmlFor="reason">Choose Reason (optional):</label>
              <div>
                <Buttons>missing quantity</Buttons>
                <Buttons>quantity not equal</Buttons>
                <Buttons>others</Buttons>
              </div>
            </div>
          </>
        )}
      </Modal>
    </Container>
  );
};
const getStatusColor = (status) => {
  switch (status) {
    case 1:
      return "lightgreen"; // Approved
    case 2:
      return "orange"; // Missing
    case 3:
      return "red"; // Missing-Urgent
    case 5:
      return "green"; //quantityUpadated
    default:
      return "inherit";
  }
};
const Container = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 20px;
  width: 80%;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Buttons = styled.button`
  padding: 8px 15px;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
const Tables = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;

export default Table;
