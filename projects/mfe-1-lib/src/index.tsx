import { lazy } from "react";
import ReactDOM from "react-dom/client";
import "shared-styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);

function App() {
  const App: any = lazy(() => import("mfe1" as any).then((m) => m.App()));

  return <App />;
}
