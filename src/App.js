import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContext";

const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
