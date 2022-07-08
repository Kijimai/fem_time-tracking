import UserInfo from "./components/UserInfo"
import TimeCard from "./components/TimeCard"
import "./styles/app.css"
import jsondata from "./utils/data.json"

function App() {
  return (
    <div className="App">
      {jsondata.map((data, index) => {
        return <TimeCard props={data} />
      })}
    </div>
  )
}

export default App
