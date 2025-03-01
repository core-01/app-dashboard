import React from 'react';
import './App.css';
import './Authform.css';
import AuthForm from './AuthForm';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Dashboard/Layout';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Dashboard/features/Profile';
import {
  EmailPage,
  CalendarPage,
  DocumentsPage,
  AnalyticsPage,
  TeamPage,
  SettingsPage,
} from './Dashboard/features/Pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/email"
            element={
              <Layout>
                <EmailPage />
              </Layout>
            }
          />
          <Route
            path="/calendar"
            element={
              <Layout>
                <CalendarPage />
              </Layout>
            }
          />
          <Route
            path="/documents"
            element={
              <Layout>
                <DocumentsPage />
              </Layout>
            }
          />
          <Route
            path="/analytics"
            element={
              <Layout>
                <AnalyticsPage />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <TeamPage />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout>
                <SettingsPage />
              </Layout>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
