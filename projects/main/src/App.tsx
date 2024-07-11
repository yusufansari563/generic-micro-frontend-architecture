import { PrimeReactProvider } from "primereact/api";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary, store } from "shared";
import "shared-styles";
import ChatApp from "./ChatApp";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);

function App() {
  let Test;
  let Banner;
  let Table;
  let mfe5;
  if (true) {
    Table = lazy(() => import("mfe2/main" as any).then((m) => m.Table()));
    // Test = lazy(() => import("mfe1/main" as any).then((m) => m.Test()));
    // Banner = lazy(() => import("mfe1/main" as any).then((m) => m.Banner()));
    Test = lazy(() => import("mfe5/main" as any).then((m) => m.Test()));
    console.log(Test,"Test");
    console.log(Table,"Table");
    
  } else {
    // Test = lazy(() => import("mfe1" as any).then((m) => m.Test()));
    // Banner = lazy(() => import("mfe1" as any).then((m) => m.Banner()));
    // Table = lazy(() => import("mfe2" as any).then((m) => m.Table()));
    mfe5 = lazy(() => import("mfe5/main" as any).then((m) => m.Test()()));
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PrimeReactProvider value={{ unstyled: true }}>
          <ChatApp />
          <Suspense fallback={<div>Loading...</div>}>
            <Table />
          </Suspense>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Test />
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Banner />
          </Suspense> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Test />
          </Suspense>
        </PrimeReactProvider>
      </Provider>
    </ErrorBoundary>
  );
}
