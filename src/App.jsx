import { useState } from 'react';
import Login from './components/Login.jsx';
import Test from './components/Test.jsx';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  const appRoutes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ]
  );

  return (
    <>
      <div className="relative w-full h-full">
        <img
          className="absolute top-0 z-0 h-screen w-full opacity-35 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/CA-en-20241223-TRIFECTA-perspective_218fd7d5-6e24-45ba-9481-e19e4cae4ad4_large.jpg"
          alt="Netflix background"
        />
        <div className="relative z-10 w-full h-full">
          <Login />
        </div>
      </div>
    </>
  )
}

export default App
