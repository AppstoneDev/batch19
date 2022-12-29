import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mapper from "../newcomps/mapper";
import Styling from "../newcomps/styling";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mapper a={20} />,
  },
  {
    path: "/styling",
    element: <Styling />,
  }
]);

export default function MyRouter() {
  return (
    <div style={{width: 300}}>
      <RouterProvider router={router} />
    </div>
  );
}
