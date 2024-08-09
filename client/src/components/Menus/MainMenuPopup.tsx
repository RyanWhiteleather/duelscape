import { useEffect, useRef, useState } from 'react';
import { MenuButton } from '../Shared/MenuButton';

interface NamePopupProps {
    isExistingGame: boolean;
    onSubmit?: (playerName: string, gameCode?: string) => void | undefined;
    onClose?: () => void | undefined;
}
/**
 * Name popup to set the name of the player before joining a game.
 */
export const MainMenuPopup = ({ isExistingGame, onSubmit, onClose }: NamePopupProps) => {
    const [playerName, setPlayerName] = useState('');
    const [gameCode, setGameCode] = useState('');
    const playerNameRef = useRef(null);
    const gameCodeRef = useRef(null);

    useEffect(() => {
        // Focus the input field when the component mounts
        playerNameRef.current?.focus();
    }, []);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleGameCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGameCode(e.target.value);
    };

    const handleSubmit = () => {
        gameCode ? onSubmit(playerName, gameCode) : onSubmit(playerName);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            handleSubmit();
        }

        if (e.key === 'Escape') {
            e.preventDefault();
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#2e2e2e] rounded-[12px] p-6 flex flex-col items-center space-y-4 w-96">
                <div className="flex items-center space-x-4 w-full">
                    <label className="text-lg font-semibold text-white w-1/3">Name:</label>
                    <input
                        type="text"
                        value={playerName}
                        onChange={handleNameChange}
                        onKeyDown={handleKeyDown}
                        ref={playerNameRef}
                        className="w-2/3 px-4 py-2 text-lg bg-gray-800 text-white border border-gray-600 rounded-md"
                        placeholder="Name"
                    />
                </div>
                {isExistingGame && (
                    <div className="flex items-center space-x-4 w-full">
                        <label className="text-lg font-semibold text-white w-1/3">Game Code:</label>
                        <input
                            type="text"
                            value={gameCode}
                            onChange={handleGameCodeChange}
                            onKeyDown={handleKeyDown}
                            ref={gameCodeRef}
                            className="w-2/3 px-4 py-2 text-lg bg-gray-800 text-white border border-gray-600 rounded-md"
                            placeholder="Game Code"
                        />
                    </div>
                )}
                <div className="flex space-x-4 mt-4">
                    <MenuButton onClick={handleSubmit}>Submit</MenuButton>
                    <MenuButton onClick={onClose}>Cancel</MenuButton>
                </div>
            </div>
        </div>
    );
};
