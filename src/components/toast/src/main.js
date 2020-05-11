
import Vue from 'vue';
import myToast from './main.vue';
let toastConstructor = Vue.extend(myToast); // 创建构造器


let instance;

function Toast (options = {}) {
  instance = new toastConstructor();

  console.log(instance.value);

  if (instance.value) {
    console.log('instance');
    instance.updateZIndex();
  }

  instance.$mount();

  document.body.append(instance.$el);
  instance.value = true;

  console.log('Toast');

}

export default Toast;