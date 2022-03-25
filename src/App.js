import './App.css';
import Books from './Components/Books/Books';
import LuckyBooks from './Components/LuckyBooks/LuckyBooks';

function App() {

  return (
    <div className="App">
      <LuckyBooks></LuckyBooks>
      <Books></Books>
    </div>
  );
}

export default App;
