import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppFrame from "./components/AppFrame/index.jsx";
import LoginRadius from "./containers/LoginRadius/index.jsx";
import LoginAuthText from "./containers/LoginAuthText/index.jsx";
import ChooseAuth from "./containers/ChooseAuth/index.jsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/login",
            element: <AppFrame/>,
            children: [
                {
                  path: "",
                  element: <ChooseAuth/>
                },
                {
                    path: "/login/radius",
                    element: <LoginRadius/>
                },
                {
                    path: "/login/authtext",
                    element: <LoginAuthText/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}

export default App
