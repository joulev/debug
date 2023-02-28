export default async function getData(page = 1) {
  const data = new Array(100).fill(null).map((_, i) => i + 1);
  return data.slice((page - 1) * 10, page * 10);
}
