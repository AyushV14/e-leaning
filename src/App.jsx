import './App.css';
import GetStarted from './landing/Login-Signup/GetStarted';
import CoursePage from './pages/Courses/CoursePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GetStarted />,
    },
    {
      path : "/dashboard",
      element : <CoursePage />
    }
  ]);
  
  return (
    <div className="App">
      {/* <GetStarted /> */}
      <RouterProvider router={router} />
      {/* <CoursePage /> */}
    </div>
  );
}

export default App;
