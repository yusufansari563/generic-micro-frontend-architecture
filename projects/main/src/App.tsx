import { PrimeReactProvider } from "primereact/api";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary, store } from "shared";
import "shared-styles";
import ChatApp from "./ChatApp";

const Test = lazy(() => import("mfe1").then(({ Test }) => ({ default: Test })));

console.log(Test);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true }}>
        <ChatApp />
        <Suspense fallback={<div>Loading...</div>}>
          <Test />
        </Suspense>
      </PrimeReactProvider>
    </Provider>
  </ErrorBoundary>
);
