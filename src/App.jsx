
import './App.css'
import Counter from './assets/Count'
import Team from './assets/Team'
import User from './assets/User'

function App() {
 

  function handleClick(){
    alert("button click")
  }

  const handleClick2 = () => {
    alert("button 2 click")
  }

  const handleClick3 = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      
      <button onClick={() => handleClick3(3)}>Click Me</button>
      
    </>
  )
}

export default App
