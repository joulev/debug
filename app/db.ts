// This is where you plug in your database and so on.
// Here we don't have a database, so after each update, the number just resets
// to zero. The form still works well.

export async function getQuantity() {
  return 0;
}

export async function setQuantity(q: number) {
  return;
}
