import { generateGameCode } from '../../lib/utils.ts';
import { MenuButton } from '../Shared/MenuButton.tsx';
import { Footer } from './Footer.tsx';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Room } from './Room.tsx';
import { useState } from 'react';
import { MainMenuPopup } from './MainMenuPopup.tsx';

export const MainMenu = () => {
    const navigate = useNavigate();

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isExistingGame, setIsExistingGame] = useState(false);
    const [onPopupSubmit, setOnPopuSubmit] = useState(undefined);

    /**
     * TODO: Placeholder for Join Game Logic.
     *   This should show a screen where the player can enter in a game code to join a create game
     */
    const OnJoinGame = () => {
        //Set the players name and joins them to a Room if available
        setOnPopuSubmit(() => (name: string, roomId: string) => {
            console.log(`Joining game with room ID: ${roomId} and name ${name}`);
            navigate(`/${roomId}`);
        });
        setIsExistingGame(true);
        setIsPopupVisible(true);
    };

    /**
     * Generates a random gamecode to be used as the roomId.
     * Naviagtes to the Room to setup the SignalR connection.
     *
     * {@link Room}
     */
    const OnCreateGame = async () => {
        //Finish creating the game and navigate the player to the Room
        setOnPopuSubmit(() => (name: string) => {
            const roomId = generateGameCode();
            console.log(`Creating game with room ID: ${roomId} and name ${name}`);
            navigate(`/${roomId}`);
        });
        setIsExistingGame(false);
        setIsPopupVisible(true);
    };

    /**
     * TODO: Placeholder for View Characters logic.
     *   This should go to a screen that has all available characters and their decks.
     */
    const OnViewCharacters = () => {
        console.log('View Characters');

        //console.log(response.text());
    };

    return (
        <div className="relative bg-opacity-50 container flex-col items-center justify-center gap-8 px-4 py-16  p-6 flex space-x-4 w-96 mx-auto bg-[#2e2e2e] rounded-[12px]">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">DuelScape</h1>
            <div className="flex space-x-4 ">
                <MenuButton onClick={() => OnCreateGame()}>Create Game</MenuButton>
                <MenuButton onClick={() => OnJoinGame()}>Join Game</MenuButton>
            </div>

            <MenuButton onClick={() => OnViewCharacters()}>View Characters</MenuButton>
            <Footer />

            {isPopupVisible && (
                <MainMenuPopup
                    isExistingGame={isExistingGame}
                    onSubmit={onPopupSubmit}
                    onClose={() => setIsPopupVisible(false)}
                />
            )}
        </div>
    );
};
