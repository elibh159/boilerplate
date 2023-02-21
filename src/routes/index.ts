import React from "react";
import { RoutesType } from "../interface/routesType";

const Home = React.lazy(() => import("../views/Home"));
const PlayList = React.lazy(() => import("../views/PlayList")); 

const routes : RoutesType[] = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/home", exact: false, name: "Home", element: Home },
  { path: "/playList", exact: false, name: "PlayList", element: PlayList},
];

export default routes;