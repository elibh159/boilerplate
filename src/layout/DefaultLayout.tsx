import React from 'react';
import { AppContent, AppFooter, AppHeader } from "../components/layout";

const DefaultLayout: () => JSX.Element = () => {
  return (
    <div>
      <div>
        <AppHeader />
        <div>  
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;