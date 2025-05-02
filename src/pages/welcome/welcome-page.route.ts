import { createElement } from "react"
import { RouteObject } from "react-router"
import { WelcomePage } from "./welcome-page.ui"

export const welcomePageRoute: RouteObject = {
  path: "/",
  element: createElement(WelcomePage)
}