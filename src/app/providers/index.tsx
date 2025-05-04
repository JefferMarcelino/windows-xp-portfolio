import { WindowsProvider } from "@/shared/hooks/windows/provider"
import { BrowserRouter } from "./RouterProvider"

export const Providers = () => {
  return (
    <WindowsProvider>
      <BrowserRouter />
    </WindowsProvider>
  )
}