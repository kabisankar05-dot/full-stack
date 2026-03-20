import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>

      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Dashboard;