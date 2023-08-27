import { createContext } from "react";

const Context = createContext<{ name: string } | null>(null);

export default Context;
