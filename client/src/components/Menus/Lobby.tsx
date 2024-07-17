import { MenuHeader } from './MenuHeader.tsx';

/**
 * Lobby where players will:
 *  Join a game
 *  Select a map
 *  Select characters
 *  Start the game
 *
 */
export const Lobby = () => {
    return (
        <div className="relative bg-[#2e2e2e] bg-opacity-50  rounded-[12px] text-whitesmoke h-96 max-w-[1000px] shadow-[0px_40px_200px_rgba(0,0,0,0.56)] w-[calc(100%_-_140px)] p-[10px_50px_50px_50px] sm:w-[calc(100%_-_70px)] sm:p-[10px_20px_30px_20px]">
            <MenuHeader>Lobby</MenuHeader>
            <div className="relative flex items-center justify-center h-64">
                <div className="flex-1 text-center">
                    <h1 className="text-white">Left Component</h1>
                </div>

                <div className="w-px bg-gray-400 h-full"></div>

                <div className="flex-1 text-center">
                    <h1 className="text-white">Right Component</h1>
                </div>
            </div>
        </div>
    );
};
