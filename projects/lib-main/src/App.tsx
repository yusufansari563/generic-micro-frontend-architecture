import ReactDOM from "react-dom/client";
import "shared-styles";
import ChatApp from "./ChatApp";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "shared";
import { PrimeReactProvider } from "primereact/api";

const App = lazy(() => import("mfe1/App" as any));
const Test = lazy(() =>
  import("mfe1/Test" as any).then(({ Test }) => ({ default: Test }))
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <ErrorBoundary>
      <PrimeReactProvider value={{ unstyled: true }}>
        <ChatApp />
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Test />
        </Suspense>
      </PrimeReactProvider>
    </ErrorBoundary>
  </>
);
