import Welcome from './Welcome';
import './App.css';

function Button() {
  return <button>Click me</button>;
}

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;