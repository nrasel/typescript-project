import { BrowserRouter } from "react-router-dom";
import { TheLayout } from "./views/pages/TheLayout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <TheLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
