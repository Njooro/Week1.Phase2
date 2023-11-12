
import './App.css';
const user = {
  name: "Ian",
  position: "Lead Instructor",
  hometown: "Suttons Bay, MI"
}

const element = (
  <ul id="about-me">
    <li className="user">Name: {user.name}</li>
    <li className="user">Position: {user.position}</li>
    <li className="user">Hometown: {user.hometown}</li>
   </ul>
)

function App() {
  return (
    element
  )
}

export default App;
