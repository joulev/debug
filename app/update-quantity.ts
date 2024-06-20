"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { zfd } from "zod-form-data";
import type { ServerActionResult } from "~/types";
import { setQuantity } from "./db";

export async function updateQuantity(
  formData: FormData
): Promise<ServerActionResult<void>> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const schema = zfd.formData({ quantity: zfd.numeric(z.number()) });
  const parseResult = schema.safeParse(formData);
  if (!parseResult.success)
    return { success: false, error: "Invalid form data" };

  const { quantity } = parseResult.data;
  // You can do this validation step inside the zod schema too
  if (quantity < 0)
    return { success: false, error: "Quantity must be non-negative" };

  await setQuantity(quantity);
  revalidatePath("/");
  return { success: true, data: undefined };
}
