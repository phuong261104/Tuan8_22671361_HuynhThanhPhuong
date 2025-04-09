import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Dashboard from "./pages/dashboard";
import TeamsPage from "./pages/TeamsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import MessagesPage from "./pages/MessagesPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import MainLayout from "./MainLayout";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
