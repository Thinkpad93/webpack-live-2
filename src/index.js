import "./index.css";
import printMe from "./print";

if (process.env.NODE_ENV === "production") {
  printMe();
} else {
  console.log("header");
}

var vm = new Vue({
  el: "#page",
  data: {
    visible: false, //dialog
    dialogText: "",
    downloadUrl: "", //打开app跳转地址
    query: {
      uid: "", //"90294975" "90295390" "90295390"
      id: "" //"5dcd06a686422c070767a78f" "5dcd273c86422c375fa72e74" "5dcd1f3e86422c2987a120b3"
    },
    info: {
      me: {}
    }
  },
  computed: {},
  methods: {
    openApp() {
      let textArray = [
        { key: 1, text: "即将打开哎呀 App查看这条圈圈详情" },
        { key: 2, text: "即将打开哎呀 App给这条圈圈点赞" },
        { key: 3, text: "即将打开哎呀 App给这条圈圈评论" }
      ];
      var slice = textArray.filter(item => {
        return item.key === num;
      });
      this.dialogText = slice[0].text;
      this.visible = true;
    }
  }
});
