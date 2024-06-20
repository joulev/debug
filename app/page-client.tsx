"use client";

import { useOptimistic } from "react";
import { useFormStatus, useFormState } from "react-dom";
import type { ServerActionResult } from "~/types";
import { updateQuantity } from "./update-quantity";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Updating..." : "Update"}
    </button>
  );
}

function Form({
  setOptimisticQuantity,
}: {
  setOptimisticQuantity: (value: number) => void;
}) {
  // Named `useActionState` in React 19, but here I still use Next.js 14 which
  // doesn't use React 19. Upgrade to Next.js 15 RC and React 19 RC if you want
  // to use the proper `useActionState` name, though the syntax is the same.
  // You don't have the `isPending` part anymore (at least React no longer
  // documents that part, whether it works or not I don't know).

  const [actionResult, action] = useFormState(
    // we don't need to access the old state, so we just use `_` here
    // but if you want to pass the old state to the server action, you can do so
    // in the first parameter. `null` means an action has never been executed,
    // while `ServerActionResult<string>` would mean `updateQuantity` has run at
    // least once.
    async (_: ServerActionResult<void> | null, formData: FormData) => {
      setOptimisticQuantity(Number(formData.get("quantity")));
      return updateQuantity(formData);
      // You can use the return value of `updateQuantity` here to trigger toasts
      // and whatnot if you want.
    },
    null
  );
  return (
    <form action={action}>
      <input type="number" name="quantity" />
      <SubmitButton />
      {actionResult && !actionResult.success && (
        <div style={{ color: "red" }}>{actionResult.error}</div>
      )}
      {actionResult && actionResult.success && (
        <div style={{ color: "green" }}>Updated successfully</div>
      )}
    </form>
  );
}

export function PageClient({ quantity }: { quantity: number }) {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
    { quantity, pending: false },
    // we don't need to access the old state, so we just use `_` here
    // but if you want to access the old state (e.g. when you want to append to
    // the old state), you can do so in the first parameter
    (_, newQuantity: number) => ({ quantity: newQuantity, pending: true })
  );
  return (
    <div>
      <div style={{ opacity: optimisticQuantity.pending ? "50%" : "100%" }}>
        Quantity = {optimisticQuantity.quantity}
      </div>
      <div>Try updating it to a negative number below to fail validation.</div>
      <Form setOptimisticQuantity={setOptimisticQuantity} />
    </div>
  );
}
