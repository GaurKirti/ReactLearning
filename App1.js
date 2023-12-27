import React from "react";
import ReactDOM  from "react-dom/client";

const elem = <span>jsx inside jsx</span>
const jsxHeading = (
<h1 id = "heading" className="head">
    {elem}
    hello world from Jsx
    </h1>
);
const HeadingFuncComp = () => {
    return <h1 id = "head1" className="head">hello world from functional component</h1>;
};
const HeadingFuncCompWithoutReturn = () => (
    <div id = "container">
        {jsxHeading}
        <HeadingFuncComp/>
    <h1 id = "head" className="head">hello world from functional component without return</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<HeadingFuncCompWithoutReturn/>);