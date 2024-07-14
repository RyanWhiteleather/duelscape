import { HomeButton } from '../Buttons.tsx';
import { useNavigate } from 'react-router-dom';

/**
 * Lobby where players will:
 *  Join a game
 *  Select a map
 *  Select characters
 *  Start the game
 *
 */
export const Lobby = () => {
    const navigate = useNavigate();
    return (
        <div className="absolute bg-[#2e2e2e]  rounded-[12px] text-whitesmoke min-h-[1000px] max-w-[1000px] shadow-[0px_40px_200px_rgba(0,0,0,0.56)] w-[calc(100%_-_140px)] p-[10px_50px_50px_50px] sm:w-[calc(100%_-_70px)] sm:p-[10px_20px_30px_20px]">
            <div className="mb-4">
                <HomeButton onClick={() => navigate('/')} />
            </div>
            <div className="flex flex-row items-center justify-center">
                <h1 className="text-white sm:text-[2rem]">Lobby</h1>
            </div>
        </div>
    );
};
