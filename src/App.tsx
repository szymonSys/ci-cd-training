import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-bold text-center">🚀 Rick and Morty - Fan Service</h1>
      </div>
      <Outlet />
      <footer>
        <div className="flex relative">
          {import.meta.env.VITE_ENVIRONMENT !== 'PROD' && (
            <div className="self-center absolute right-0 bg-white rounded-lg shadow-sm p-2">
              ENV: {import.meta.env.VITE_ENVIRONMENT ?? 'Local'} - VER: {__APP_VERSION__}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;
