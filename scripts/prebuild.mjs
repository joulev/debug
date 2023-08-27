import fs from "fs";

async function main() {
  const data = { name: "John Doe" }; // fetch("https://jsonplaceholder.typicode.com/todos/1"), etc.
  fs.writeFileSync("data.json", JSON.stringify(data));
}

main();
