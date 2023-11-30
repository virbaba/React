import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setDate(new Date());
    },1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <center>
        <h2>
          {date.toLocaleString()}
        </h2>
      </center>
    </>
  );
}

export default App;
