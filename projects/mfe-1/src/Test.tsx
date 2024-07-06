import { useEffect } from "react";
import StepperComp from "./StepperComp";
import { useSelector } from "react-redux";
import Count from "./Count";
import LoadUser from "./LoadUser";

export const Test: React.FC = () => {
  const store = useSelector((state) => state);

  useEffect(() => {
    console.log(store, "main > test");
  }, []);

  return (
    <div>
      MFE 1 is here yoo!!! 🎉🎉🎉
      <br />
      <StepperComp />
      <Count />
      <LoadUser />
    </div>
  );
};
