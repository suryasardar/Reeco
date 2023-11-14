import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { changeProductState } from "../Redux/Reducer";

//STATUS PENDING = 0
//STATUS APPROVED = 1
//STATUS MISSING=2
//STATUS MISSING URGENT =3
const Table = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selected, setSlected] = useState();
  const Display = useSelector((state) => state.Display);

  const ProductStateChange = (status) => {
    try {
      dispatch(changeProductState({ selected, status }));
    } catch (error) {}
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
          <Button>Add Item</Button>
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
                      setSlected(product);
                      ProductStateChange(1);
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
                {product?.status === 1 && <div> Approved</div>}
                {product?.status === 2 && <div>Missing</div>}
                {product?.status === 3 && <div>Missing-Urgent</div>}
                Edit
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
            ProductStateChange(3);
            setOpen(false)
        }}
        onCancel={() => {
            ProductStateChange(2);
            setOpen(false)
        }}
        width={500}
        okText="Yes"
        cancelText="no"
      >
        is {selected?.name},Is this very urgent?
      </Modal>
    </Container>
  );
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

const Tables = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export default Table;
