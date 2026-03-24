import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <h2>Dashboard</h2>

        <button onClick={() => navigate("/video")}>
          Start Video Consent
        </button>
      </div>
    </div>
  );
}

export default Dashboard;