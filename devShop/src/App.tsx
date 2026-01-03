import "./App.css";
import { BrowserRouter} from "react-router";
import RoutesShop from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesShop />
    </BrowserRouter>
  );
}

export default App;
