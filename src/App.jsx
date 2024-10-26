import Router from "./router/Router";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </TanstackQueryProvider>
  );
}

export default App;
