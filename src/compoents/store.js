// YourComponent.js
import React from "react";
import dummyData from "../data.json";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Reducer";
import { cart } from "../Redux/Reducer";
import { Link } from "react-router-dom";

const YourComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Assuming jsonData is your JSON data
    const jsonData = dummyData.products;

    // Dispatch the action to set the initial state
    dispatch(setProducts(jsonData));
  }, [dispatch]); //

  const products = useSelector((state) => state.products);
  const AddToHome = async (product) => {
    dispatch(cart(product));
  };

  return (
    <Container>
      <h1>Product List</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>Image</TableHeader>
            <TableHeader>Product Name</TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
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
                {/* <img src={process.env.PUBLIC_URL + product.status.correct}
                          alt="Correct"
                          style={{ width: '50px', height: '50px', marginRight: '10px' }}
                      />
                      <img src={process.env.PUBLIC_URL + product.status.wrong}
                          alt="Wrong"
                          style={{ width: '50px', height: '50px', marginRight: '10px' }} /> */}
                Edit
              </TableCell>
              <Link to="/">
                <TableCell onClick={() => AddToHome(product)}>
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    ADD
                  </button>
                </TableCell>
              </Link>
            </TableRow>
          ))}
        </tbody>
      </Table>
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

const Table = styled.table`
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
export default YourComponent;
