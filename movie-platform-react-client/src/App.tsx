import React from 'react';
import { Outlet } from 'react-router-dom';
import Options from './components/Options/Options';

const App: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col s12 m4 l2 hide-on-small-only no-padding">
          <Options />
        </div>

        <div className="col s12 m8 l10 no-padding">
          <div className="container">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
