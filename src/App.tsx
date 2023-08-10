import Root from "./components/app-layout/Root";
import Resume from "./screens/resume";
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
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
