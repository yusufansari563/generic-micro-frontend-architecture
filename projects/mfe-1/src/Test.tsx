import { useEffect } from "react";
import StepperComp from "./StepperComp";
import { useSelector } from "react-redux";

const Test: React.FC = () => {
  const store = useSelector((state) => state);

  useEffect(() => {
    console.log(store,"main > test");
  }, []);

  return (
    <div>
      MFE 1 is here yoo!!! 🎉🎉🎉
      <br />
      <StepperComp />
    </div>
  );
};

export default Test;
