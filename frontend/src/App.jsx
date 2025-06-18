import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <AppRoutes />
    </>
  );
}

export default App;
