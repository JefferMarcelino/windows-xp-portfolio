import { createContext } from "react";

export interface OpenedWindow {
  id: string;
  title: string;
  icon: string;
}

interface WindowsContextType {
  openedWindows: OpenedWindow[];
  openWindow: (window: OpenedWindow) => void;
  closeWindow: (id: string) => void;
  isWindowOpen: (id: string) => boolean;
}

export const WindowsContext = createContext<WindowsContextType>({
  openedWindows: [],
  openWindow: () => {},
  closeWindow: () => {},
  isWindowOpen: () => false,
});