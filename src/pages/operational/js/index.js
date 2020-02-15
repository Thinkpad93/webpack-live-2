import "normalize.css";
import "../css/index.scss";
import axios from "axios";
import "../../../assets/js/flexible";

function operationGet() {
  axios
    .get("http://beta.guangzhouyueda.com/act/operation/get", {
      params: { id: 2 }
    })
    .then(res => {
      console.log(res);
    });
}
operationGet();
