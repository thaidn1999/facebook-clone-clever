import React from 'react';
import './App.css';
import Feed from './feed/Feed';
import Header from './header/Header';
import Login from './login/Login';
import Sidebar from "./sidebar/Sidebar";
import Widget from './widget/Widget';
import { useStateValue } from "./StateProvider"

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>

  );
}

export default App;
