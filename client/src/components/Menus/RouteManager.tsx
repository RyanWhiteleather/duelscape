import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './MainMenu';

export const RouteManager = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </>
  );
};
