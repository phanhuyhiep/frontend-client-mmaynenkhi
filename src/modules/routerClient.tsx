import { RouteObject } from "react-router-dom";
import HomePage from "./homePage/homePage.modules";

export const clientRouter: RouteObject[] = [
    {
        path: "",
        element: <HomePage/>
    }
]