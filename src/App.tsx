import Root from "./components/app-layout/Root";
import CV from "./screens/cv";
import Home from "./screens/home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
