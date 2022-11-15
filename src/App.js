import { useCallback, useState } from "react";
import "./App.css";
import { COLORS, generateGrid } from "./utils";

const Cell = ({ colorIndex }) => {
  return (
    <div className="cell" style={{ backgroundColor: COLORS[colorIndex] }}></div>
  );
};

const Line = ({ line, row }) => {
  return (
    <div className="line">
      {line.map((colorIndex, idx) => (
        <Cell colorIndex={colorIndex} key={`cell_${row}_${idx}`} />
      ))}
    </div>
  );
};

const Grid = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((line, idx) => (
        <Line line={line} row={idx} key={`line_${idx}`} />
      ))}
    </div>
  );
};

function App() {
  const [grid, setGrid] = useState();
  const onHandleNewGrid = useCallback(() => {
    setGrid(generateGrid(7));
  }, []);

  return (
    <div className="App">
      <button onClick={onHandleNewGrid}>Generate New Grid</button>
      {grid && <Grid grid={grid} />}
    </div>
  );
}

export default App;
