import "./App.css";
import Counter from "./component/Counter.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStopwatch);

function App() {
  return (
    <div>
      <header>
        <FontAwesomeIcon icon="stopwatch" />
        <h1>React Counter</h1>
      </header>
      <main>
        <div>
          <button>Add counter</button>
        </div>
        <div>
          <Counter />
        </div>
      </main>
      <footer>
        <p>Made with React at Le Reacteur by Nahomy Polycar</p>
      </footer>
    </div>
  );
}

export default App;
