import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Teste from './test/teste'
import "./main.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/teste',
    element: <Teste />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        {/* <App /> */}
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>   
  </React.StrictMode>
)
