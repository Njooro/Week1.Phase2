
import './App.css';
import Transaction from "./components/Transaction"
import Transactions  from './components/TransactionsLists';



 const planets = [
  {name: "Mars", isGasPlanet: false},
  {name: "Earth", isGasPlanet: false},
  {name: "Jupiter", isGasPlanet: true},
  {name: "Venus", isGasPlanet: false},
  {name: "Neptune", isGasPlanet: true},
  {name: "Uranus", isGasPlanet: true},
 ]

 
function App() {
  // fetch("http://localhost:3000/transactions")
  // .then((res)=> res.json())
  // .then((data)=> {
  //   console.log(data)
  // })

  
  return (
   
    
    <>
    
    {planets.map((planet, key) => {
    if (planet.isGasPlanet) return <h1>{planet.name}</h1>})}

    <Transactions />
    </>
    
  )
}

export default App;
