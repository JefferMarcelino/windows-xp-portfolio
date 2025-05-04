import { useContext } from "react";
import { WindowsContext } from "./context";

export const useWindows = () => useContext(WindowsContext);