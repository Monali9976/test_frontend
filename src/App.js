import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import ChatWindow from './components/ChatWindow';


function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <Router>
      {/* <div className="app-container"> */}
      <div className="app-container" style={{ height: "100%", width: "100%" }}>
        <Routes>
          <Route
            path="/"
            element={
              showChat ? (
                <ChatWindow onBack={() => setShowChat(false)} />
              ) : (
                <StartScreen onStart={() => setShowChat(true)} />
              )
            }
          />
          </Routes>
      </div>
    </Router>
  );
}

export default App;