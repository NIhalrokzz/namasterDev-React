/*
*
<div id="parent">
    <div id="child">
        <h1>This is H1</h1>
        <h2>This is H2</h2>
    </div>
</div>
ReactElement(Object) => HTML(elements) using render
*/

const heading = React.createElement(
    "div", 
    {id:"heading"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "This is H1"), React.createElement("h2", {}, "This is H2")]
    ));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);