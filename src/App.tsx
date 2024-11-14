import { useRoutes } from "react-router-dom";
import DefaultClient from "./container/default-client/default-client";
import PrivateRoute from "./utils/privateRoute";
import { clientRouter } from "./modules/routerClient";
function App() {
  const element: any = useRoutes([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <DefaultClient />
        </PrivateRoute>
      ),
      children: clientRouter,
    },
  ]);

  return element;
}

export default App;