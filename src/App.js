import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";
import SearchedResDiv from "./components/SearchedResDiv";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "search_results/:searchQuery",
        element:<SearchedResDiv/>
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <div className="">
          {/* <Header /> */}
        </div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
