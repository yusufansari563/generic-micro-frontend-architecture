import { Test } from "mfe1";
import { PrimeReactProvider } from "primereact/api";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "shared";
import "shared-styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <PrimeReactProvider value={{ unstyled: true }}>
      <Test />
    </PrimeReactProvider>
  </ErrorBoundary>
);
