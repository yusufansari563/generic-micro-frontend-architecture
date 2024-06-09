import ReactDOM from "react-dom/client";
import { Messages } from "primereact/messages";
import "shared-styles";
import Test from "./Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Test />);
