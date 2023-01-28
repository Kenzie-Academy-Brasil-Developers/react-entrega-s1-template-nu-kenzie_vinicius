export function Sum(list) {
  return list.reduce((acc, cur) => acc + cur.value, 0);
}
