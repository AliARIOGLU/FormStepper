import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    // console.log("here");
    // const random = Math.floor(Math.random() * 100);
    // const intervalId = setInterval(() => {
    //   console.log(`[${random}] - Re-rendered`);
    // }, 2000);
    // return () => clearInterval(intervalId);
  }, []);

  return <div>Test</div>;
};

export default Test;
