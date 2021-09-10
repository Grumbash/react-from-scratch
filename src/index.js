import "./styles/index.css";
import "./styles/index.scss";
import { render } from "react-dom";

const obj = {
  bar: 1,
  baz: "foo",
};

console.log(obj);

render(
  <h1>Hello {new Date().toDateString()}</h1>,
  document.getElementById("TMS-root")
);
