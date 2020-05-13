// 把键值对添加到存储中，如果键名存在，则更新其对应的值
export function setItem (storage, key, value) {
  return storage.setItem(key, JSON.stringify(value));
}
// 返回键名对应的值
export function getItem (storage, key) {
  return JSON.parse(storage.getItem(key));
}
// 把该键名从存储中删除
export function removeItem (storage, key) {
  storage.removeItem(key);
}
// 调用该方法会清空存储中的所有键名
export function clear (storage) {
  storage.clear();
}
