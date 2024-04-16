import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const StyleCard={
    backgroundColor:"#f0f0f0"
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout />,
            children:[
                {
                    path:"/",
                    element:<Body />,
                },
                {
                    path:"/about",
                    element:<About />,
                },
                {
                    path:"/contactUs",
                    element:<ContactUs />
                },
                {
                    path:"/restaurants:resId",
                    element:<RestaurantMenu />,
                }
            ],
            errorElement:<Error />,
        },
        
    ]);

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<RouterProvider router={appRouter} />);