import Router from "./router/Router";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
    </TanstackQueryProvider>
  );
}

export default App;
