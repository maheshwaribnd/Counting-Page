
import './App.css';
import Counting from "./Components/counter";

function App() {
  return (
    <div className="App">
      <h2>Counting App</h2>
      <Counting btn1Name = 'Increment' btn2Name = 'Decrement' btn3Name = 'GO BACK TO 0'/>
    </div>
  );
}

export default App;
