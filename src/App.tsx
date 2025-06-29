import { Bounce, ToastContainer } from "react-toastify";
import AppRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useThemeStore } from "@store/useThemeStore";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@config/queryClient";

function App() {
  const theme = useThemeStore((state) => state.theme);
  return (
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
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRouter />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
