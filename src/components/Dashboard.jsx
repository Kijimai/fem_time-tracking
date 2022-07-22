import UserInfo from "./UserInfo"
import TimeCard from "./TimeCard"
import jsondata from "../utils/data.json"
const Dashboard = () => {
  return (
    <main className="dashboard grid">
      <UserInfo />
      {jsondata.map((data, index) => {
        return <TimeCard key={index} props={data} />
      })}
    </main>
  )
}

export default Dashboard
