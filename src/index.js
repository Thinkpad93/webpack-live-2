import "./index.css";
import printMe from "./print";

if (process.env.NODE_ENV === "production") {
  printMe();
} else {
  console.log("header");
}
