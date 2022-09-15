import React, { useState, useEffect } from "react";
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from "./Header";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserById('6320a3ed5f92a4971c8fc949')
      .then(({ data }) => {
        setCurrentUser(data);
      });
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
