
import './App.css'
import Friends from './Friends'
import Team from './Team'
import User from './User'


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
      <Friends></Friends>
      <Team></Team>
      <User></User>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      
      <button onClick={() => handleClick3(3)}>Click Me</button>
      
    </>
  )
}

export default App
