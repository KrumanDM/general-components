import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <div className="input-container">
        <Input
          placeholder="Small primary input"
          variant="primary"
          size="small"
        />
        <Input
          placeholder="Medium secondary input"
          variant="secondary"
          size="medium"
        />
        <Input placeholder="Large danger input" variant="danger" size="large" />
        <Input placeholder="Disabled input" disabled />
        </div>
      </div>
    </>
  );
}

export default App;
