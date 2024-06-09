import { Button } from "primereact/button";
import { Message } from "primereact/message";

const Test: React.FC = () => {
  return (
    <div>
      MFE 1 is here yoo!!! 🎉🎉🎉
      <br />
      <div className="grid">
        <Message severity="info" text="Info Message" />
        <Button label="Click Me" icon="pi pi-check" />
      </div>
    </div>
  );
};

export default Test;
