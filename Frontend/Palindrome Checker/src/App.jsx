import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Palindrome from "./Palindrome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Palindrome />
    </>
  );
}

export default App;
