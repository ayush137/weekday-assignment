import "./App.css";
import IndexProvider from "./wrapper";
import Jobs from "./page/jobs";

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
