import React from 'react';
import styled from 'styled-components';

 

 

const OrderComponent = () => {
  return (
    <OrderContainer>
          <OrderNumber>Order 874940</OrderNumber>
      <LargeOrderNumber>
        Order 874940
      </LargeOrderNumber>
      <ButtonContainer>
        <BackButton>Back</BackButton>
        <ApprovedButton>Approved order</ApprovedButton>
      </ButtonContainer>
    </OrderContainer>
  );
};
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

const OrderNumber = styled.div`
  font-size: 18px; /* Adjust the font size as needed */
  margin-bottom: 10px;
  
    text-decoration: underline;
`;

const LargeOrderNumber = styled.div`
  font-size: 24px; /* Larger font size */
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
`;
const ApprovedButton = styled.button`
  margin-right: 10px;
  &:hover {
    background-color: green;
  }
  
`;

const BackButton = styled.button`
  margin-right: 10px;
  &:hover {
    background-color: green;
  }
  
`;
 
export default OrderComponent;
