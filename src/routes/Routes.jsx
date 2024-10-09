import { useRoutes } from "react-router-dom"
import publicRoutes from "./PublicRoutes";
import privateRoutes from "./PrivateRoutes";
import fallBackRoutes from "./FallBackRoutes";
import Layout from "../pages/layout/Layout";

const Routes = ()=>{
    const routes = useRoutes(
        [
           {
             path:'/',
             element:<Layout/>,
             children:privateRoutes
           }
        ]
    )
    return routes;
}

export default Routes;
