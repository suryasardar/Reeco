import React from "react";
import styled from "styled-components";

const OrderComponent = () => {
  // const products = useSelector((state) => state.products)
  return (
    <>
      {/* {products.map((product) => ( */}

      <OrderContainer>
        <OrderNumber>Order 458934</OrderNumber>
        <LargeOrderNumber>Order 458934</LargeOrderNumber>
        <ButtonContainer>
          <BackButton style={{ backgroundColor: "green", color: "white" }}>
            Back
          </BackButton>
          <ApprovedButton style={{ backgroundColor: "green", color: "white" }}>
            Approved order
          </ApprovedButton>
        </ButtonContainer>
        <div> </div>
      </OrderContainer>
      {/* ))} */}
    </>
  );
};
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px auto;
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
  border-radius: 10px;
`;

const BackButton = styled.button`
  margin-right: 10px;
  border-radius: 10px;
`;

export default OrderComponent;
