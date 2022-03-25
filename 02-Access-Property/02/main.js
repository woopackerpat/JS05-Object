function checkEmptyObject(obj) {
  for (let key in obj) {
    if (!key) return true;
    return false;
  }
}
