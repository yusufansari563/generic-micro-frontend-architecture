import { PrimeReactProvider } from "primereact/api";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary, StarWarsCharactersContainer, store } from "shared";
import "shared-styles";
import Test  from "./Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Test />
          <StarWarsCharactersContainer />
        </Suspense>
      </PrimeReactProvider>
    </Provider>
  </ErrorBoundary>
);
