import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './Menus/MainMenu';
import { Room } from './Menus/Room.tsx';

export const RouteManager = () => {
    return (
        // TODO: Look into a better way to do this.
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#003366] to-[#5d0000] text-white">
            <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route path=":roomId" element={<Room />} />
            </Routes>
        </div>
    );
};
