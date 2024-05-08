import { lazy } from "react";
import "./App.css";
import IndexProvider from "./wrapper";
const Jobs = lazy(() => import("./page/jobs/index"));

function App() {
  return (
    <>
      <IndexProvider>
        <Jobs />
      </IndexProvider>
    </>
  );
}

export default App;
