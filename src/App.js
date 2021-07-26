import { CornponentsTheme, Normalize } from "@cornershop/cornponents";
import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationProvider } from "./components/Notification";
import MainPage from "./pages/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <CornponentsTheme>
      <Normalize />
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <MainPage />
        </NotificationProvider>
      </QueryClientProvider>
    </CornponentsTheme>
  );
}

export default App;
