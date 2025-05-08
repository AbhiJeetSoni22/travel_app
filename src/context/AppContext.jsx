// src/context/AppContext.jsx
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelers, setTravelers] = useState("");

  return (
    <AppContext.Provider value={{ destination, setDestination, duration, setDuration, travelers, setTravelers }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easier access
export const useAppContext = () => useContext(AppContext);
