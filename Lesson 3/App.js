import React from "react";
import ReactDOM from "react-dom/client";

// JSX(transpiled before it reached the JS) - Parcel - Babel
// JSX => Babel transpiles => React.createElement => ReactElement-JS Object => HTMLElement

const Title = () => <h1>Hii there from JSX</h1>;

// React Component
// 1. Class Based Components
// 2. Functional Components

// React Functional Component
const HeadingComponent = () => (
  <div>
    <Title />
    <h1 className="heading">react functional Component</h1>
  </div>
);
// same same
const HeadingComponent2 = () => <h1>react functional Component</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

// to render a component
root.render(<HeadingComponent />);
