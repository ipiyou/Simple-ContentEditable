import ElementEditable from "./components/ElementEditable";
import { useRef, useState } from "react";
import { ElementChangeType } from "./components/Element";

function App() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [change, setChange] = useState<string>("");

  return (
    <ElementEditable
      element="div"
      value={change}
      Ref={ref}
      contentEditable
      onChange={(e: ElementChangeType) => setChange(e.target.value)}
      onKeyDown={() => {}}
      onKeyUp={() => {}}
      onKeyPress={() => {}}
      onFocus={() => {}}
      onBlur={() => {}}
      className="YES!!!"
      placeholder="finally done!!!"
      style={{}}
    />
  );
}

export default App;
