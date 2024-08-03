import React from "react";
import ReactDOM from "react-dom/client";
/**Simple Element */
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from actual react"
);
// console.log("Heading :", heading);
const simpleElement = ReactDOM.createRoot(
  document.getElementById("simpleElement")
);
// console.log("Root :", simpleElement);
simpleElement.render(heading);

// const jsxHeading = <h1 className="jsxHeading">This is jsx Heading</h1>;
// const jsxElement = ReactDOM.createRoot(document.getElementById("jsxElement"));
// jsxElement.render(jsxHeading);

/**
 * React Functional component
 */

const Title = () => (
    <div id="container">
        <h1 className="title">This is functionalComponent Tiltle</h1>
    </div>
);

const Heading = () =>(
    <div id="container">
        <Title/>
      <h1>This is functionalComponent Heading and component composition is happening</h1>
    </div>
)

const functionalComponent = ReactDOM.createRoot(
  document.getElementById("functionalComponent")
);
functionalComponent.render(<Heading />);
