import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import { ScrollProvider } from './lib/context/context';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ScrollProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />;
            })}
          </Routes>
        </ScrollProvider>
      </div>
    </Router>
  );
}

export default App;
