import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX Element
  </h1>
);

//React Functional Component
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX using Title Component
  </h1>
);

const HeadingComponent = () => {
  return (
    <div className="container">
      {title}
      <Title />
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
