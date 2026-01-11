import { useState } from "react";
import rawData from "./data/data.json";
import type { IQuizData } from "./types";
import "./App.css";

function App() {
  // sanity check to ensure data is correctly typed
  const data = rawData as IQuizData;

  return (
    <>
      <ul>
        <li>{data.shoes[0].name}</li>
        <li>{data.questions[0].copy}</li>
      </ul>
    </>
  );
}

export default App;
