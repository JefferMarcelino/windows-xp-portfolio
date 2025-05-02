import { createElement } from "react"
import { RouteObject } from "react-router"
import { DesktopPage } from "./desktop-page.ui"

export const desktopPageRoute: RouteObject = {
  path: "/desktop",
  element: createElement(DesktopPage)
}