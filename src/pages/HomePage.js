import React from "react";

import OrderComponent from "../compoents/orderview";
import YourContainerComponent from "../compoents/status";
import YourComponent from "../compoents/table";

const HomePage = () => {
    return (
        <>
         
            <OrderComponent />
            <YourContainerComponent />
            <YourComponent/>
        </>
    )
}
export default HomePage;