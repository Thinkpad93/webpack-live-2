// 检查一个元素是否是body元素的后代元素且非body元素本身
export function contains(node) {
  return node === document.body ? false : document.body.contains(node);
}

export function toggleClass(element, className) {
  return element.classList.toggle(className);
}
