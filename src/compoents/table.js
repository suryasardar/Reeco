import React from 'react';
import styled from 'styled-components';
 

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

const YourComponent = () => {
  return (
    <Container>
      <div style={{ display: 'flex', marginBottom: '20px',justifyContent:'space-between' }}>
        <Input type="text" placeholder="Search" />
        <Button>Add Item</Button>
      </div>

      <Table>
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
                  <TableRow>
                  <TableCell></TableCell>
            <TableCell>Product 1</TableCell>
            <TableCell>Brand A</TableCell>
            <TableCell>$50</TableCell>
            <TableCell>2</TableCell>
                      <TableCell>$100</TableCell>
                      <TableCell>Edit</TableCell>
                       
                          
            
          </TableRow>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </Container>
  );
};

export default YourComponent;
