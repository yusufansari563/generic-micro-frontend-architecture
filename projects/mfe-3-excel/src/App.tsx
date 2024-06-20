import { PrimeReactProvider } from "primereact/api";
import { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ErrorBoundary, store } from "shared";
import "shared-styles";
import VirtualizedTable from "./VirtualizedTable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PrimeReactProvider value={{ unstyled: true }}>
          <Suspense fallback={<div>Loading...</div>}>
            <div
              className={`bg-blue-200 container mx-auto p-4 ${isDarkMode ? "dark" : "light"}`}
            >
              <button
                onClick={toggleDarkMode}
                className="mb-4 p-2 border rounded"
              >
                Toggle {isDarkMode ? "dark" : "light"} Mode
              </button>
              <h1 className="text-2xl font-bold mb-4">
                Excel-like Application
              </h1>
              <VirtualizedTable />
            </div>
          </Suspense>
        </PrimeReactProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
