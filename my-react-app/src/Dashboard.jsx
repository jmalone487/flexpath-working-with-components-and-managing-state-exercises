import UserProfile from "./UserProfile";
import UserStats from "./UserStats";

function Dashboard() {
  const user = { name: "James", age: 30 };

  return (
    <div>
      <h2>Dashboard</h2>
      <UserProfile user={user} />
      <UserStats />
    </div>
  );
}

export default Dashboard;
