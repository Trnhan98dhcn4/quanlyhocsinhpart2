import { useRoutes } from "react-router-dom";
import * as features from "../features/index";
// import * as components from "../components/index";
// import { PathRouter } from "../constants/path.router";

const routing = [
  //   {
  //     path: PathRouter.home,
  //     element: (
  //       <components.LayoutComponent>
  //         <features.HomeComponent />
  //       </components.LayoutComponent>
  //     ),
  //   },
  //   {
  //     path: PathRouter.search,
  //     element: (
  //       <components.LayoutComponent>
  //         <features.SearchComponent />
  //       </components.LayoutComponent>
  //     ),
  //   },
  ...features.routerStudent,
  {
    path: "*",
    element: <h1>Page not found error 404</h1>,
  },
];

export default function AppRouter() {
  const routes = useRoutes(routing);
  return routes;
}
