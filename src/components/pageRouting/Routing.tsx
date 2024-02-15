import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TopPage } from '../pages/TopPage.tsx';
import { InputPage } from '../pages/InputPage.tsx';
import { ConfirmPage } from '../pages/ConfirmPage.tsx';
import { TODO, INPUT, CONFIRM } from '../const/RoutingPath.tsx';

export const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={TODO} element={<TopPage />} />
        <Route path={INPUT} element={<InputPage />} />
        <Route path={CONFIRM} element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
};
