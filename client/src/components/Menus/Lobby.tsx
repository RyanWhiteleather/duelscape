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
        <div className="relative bg-[#2e2e2e] bg-opacity-50  rounded-[12px] text-whitesmoke h-96 max-w-[1000px] shadow-[0px_40px_200px_rgba(0,0,0,0.56)] w-[calc(100%_-_140px)] p-[10px_50px_50px_50px] sm:w-[calc(100%_-_70px)] sm:p-[10px_20px_30px_20px]">
            <div className=" absolute left-0 top-0 bg-gray-700 p-4 rounded-t-[12px] flex items-center justify-between w-full ">
                <HomeButton onClick={() => navigate('/')} />
                <div className="flex-1 text-center">
                    <h1 className="text-white sm:text-[2rem] text-center">Lobby</h1>
                </div>
            </div>
        </div>
    );
};
