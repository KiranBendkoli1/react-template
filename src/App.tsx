import { Bounce, ToastContainer } from "react-toastify";
import AppRouter from "./routes";
import { useThemeStore } from "@store/useThemeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <>
      <div className={theme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
