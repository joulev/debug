"use client";
import axios from "axios";

export default function Page() {
  const handleSubmit = async () => {
    const data = await axios.post('/api', {test: 'test'}, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(data);
  };
  return <button onClick={() => handleSubmit()}>Click me</button>
}
