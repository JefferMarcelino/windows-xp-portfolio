import { useState } from "react";
import { OpenedWindow, WindowsContext } from "./context";

export const WindowsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedWindows, setOpenedWindows] = useState<OpenedWindow[]>([]);

  const openWindow = (window: OpenedWindow) => {
    setOpenedWindows((prev) => {
      if (prev.find((w) => w.id === window.id)) return prev;
      return [...prev, window];
    });
  };

  const closeWindow = (id: string) => {
    setOpenedWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const isWindowOpen = (id: string) => {
    return openedWindows.some((window) => window.id === id);
  };

  return (
    <WindowsContext.Provider value={{ openedWindows, openWindow, closeWindow, isWindowOpen }}>
      {children}
    </WindowsContext.Provider>
  );
};
