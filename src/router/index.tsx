import { JSX, lazy, LazyExoticComponent, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Button, Result } from "antd";

const App: LazyExoticComponent<() => JSX.Element> = lazy(() => import("../App.tsx"));

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><App /></Suspense>,
    errorElement: <div>Error!</div>
  },
  {
    path: "*",
    element: <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  }
])

export default router;
