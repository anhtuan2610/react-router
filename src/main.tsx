import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import AppRouter from "./AppRouter.tsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <App />,
    children: [
      // mấy cái / tiếp theo đằng sau url gốc
      {
        path: "abc", // ý là thêm cái này vào url /abc -> chuyển hướng đến element
        element: <App />,
      },
    ],
  },
  {
    path: "/product",
    element: <div>Product</div>,
    children: [
      {
        path: ":id",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
