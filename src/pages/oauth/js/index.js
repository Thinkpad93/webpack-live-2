import "../css/index.css";
import { cube } from "./math.js";
import Vue from "vue";
import printMe from "./print.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  console.log(location);
}

printMe();

cube();

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
