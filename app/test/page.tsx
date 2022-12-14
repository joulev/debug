'use client'

export default function Page() {
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
