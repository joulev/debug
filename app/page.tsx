import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default function Page() {
  const token = cookies().get("token");
  async function setToken() {
    "use server";
    const token = new Array(36)
      .fill(0)
      .map(() => Math.random().toString(36)[2])
      .join("");
    cookies().set("token", token);
    revalidatePath("/");
  }
  return (
    <div>
      <div>{token ? token.value : "No token"}</div>
      <form action={setToken}>
        <button type="submit">Set token</button>
      </form>
    </div>
  );
}
