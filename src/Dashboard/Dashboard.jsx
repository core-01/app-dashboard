// src/Dashboard/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, BarChart3, ClipboardList, PersonStandingIcon } from "lucide-react";
import "./Dashboard.css"; 

function Dashboard() {
  const navigate = useNavigate();
  const apps = [
    {
      title: "Issue Tracker",
      icon: <ClipboardList className="card-icon" />,
      description: "Manage your issues and tasks",
      stats: "23 new Issues",
      path: "*",
    },
    {
      title: "HRMS Tools",
      icon: <PersonStandingIcon className="card-icon" />,
      description: "Tools for HR and employee management",
      stats: "3 events today",
      path: "*",
    },
    {
      title: "Documents",
      icon: <FileText className="card-icon" />,
      description: "Access and edit your documents",
      stats: "5 recent files",
      path: "*",
    },
    {
      title: "Analytics",
      icon: <BarChart3 className="card-icon" />,
      description: "View insights and reports",
      stats: "Updated 2h ago",
      path: "*",
    },
  ];

  return (
    <div className="dashboard-container" style={{ maxWidth: "1200px" }}>
      <div className="grid-container">
        {apps.map((app, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(app.path)}
          >
            <div className="card-header">
              <div className="card-icon-container">{app.icon}</div>
              <span className="card-stats">{app.stats}</span>
            </div>
            <h3 className="card-title">{app.title}</h3>
            <p className="card-description">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
