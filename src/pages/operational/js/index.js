import "normalize.css";
import "../css/index.scss";
import axios from "axios";
import "../../../assets/js/flexible";

if (process.env.NODE_ENV === "production") {
  console.log("Looks like we are in development mode!");
}

function operationGet() {
  axios
    .get("http://beta.guangzhouyueda.com/act/operation/get", {
      params: { id: 2 }
    })
    .then(res => {
      let result = res.data;
      console.log(result.data);
    });
}
operationGet();
