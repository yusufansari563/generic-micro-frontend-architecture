import { PrimeReactProvider } from "primereact/api";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary, store } from "shared";
import "shared-styles";
import Table from "./Table";
import { createPortal } from "react-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true }}>
        <Suspense fallback={<div>Loading...</div>}>
          {createPortal(<Table />, document.body)}
        </Suspense>
      </PrimeReactProvider>
    </Provider>
  </ErrorBoundary>
);
