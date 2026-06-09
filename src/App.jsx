import React, { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { withAuth } from "./HOC/withAuth";
import Posts from "./components/Posts";
import withFetch from "./HOC/withFetch";
import Users from "./components/Users";

const App = () => {

  const url = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10";
  localStorage.setItem('token', JSON.stringify(false));
  const ProtectedDashboard = withAuth(Dashboard);
  const HOCPosts = withFetch(Posts, url);
  
  return (
    <>
        <BrowserRouter>
          <nav style={{ padding: '20px', display: "flex", gap: "24px", background: "#eee" }}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/users'>Users</Link>
          </nav>

          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
            <Route 
              path="/dashboard"
              element={<ProtectedDashboard />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/posts"
              element={<HOCPosts />}
            />
            <Route 
              path="/users"
              element={<Users />}
            />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App;
