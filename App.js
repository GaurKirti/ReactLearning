import React from "react";
import ReactDOM  from "react-dom/client";
const headingForReact = React.createElement("h1",{id:"heading", xyz:"abc"},"hello world from React");
            const root = ReactDOM.createRoot(document.getElementById("root1"));
            root.render(headingForReact);