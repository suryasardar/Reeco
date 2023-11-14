import React from "react";

import OrderComponent from "../compoents/orderview";
import YourContainerComponent from "../compoents/status";
 
import Table from "../compoents/table";

const HomePage = () => {
    return (
        <>
         
            <OrderComponent />
            <YourContainerComponent />
            <Table/>
        </>
    )
}
export default HomePage;