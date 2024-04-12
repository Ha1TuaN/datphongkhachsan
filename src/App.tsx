import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
