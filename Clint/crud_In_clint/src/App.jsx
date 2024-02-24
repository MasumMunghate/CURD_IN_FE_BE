import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GetUser from "./Component/GetUsers/GetUser";
import AddUser from "./Component/AddUser/AddUser";
import UpdateUser from "./Component/UpdateUser/UpdateUser"

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <GetUser/>,
    },
    {
      path: "/add",
      element: <AddUser/>,
    },
    {
      path: "/edit/:id",
      element:<UpdateUser/>,
    },
  ]);

  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
