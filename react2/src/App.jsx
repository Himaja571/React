
import './App.css'



function Welcome() {
  return <h2>second day of react course</h2>
}
function Button(){
  return <button>Click me</button>
}

function App() {
  return (
   <div><h1>Welcome to React</h1>
    <Welcome/>
    <Button/>
      </div>
  );
}

export default App;
