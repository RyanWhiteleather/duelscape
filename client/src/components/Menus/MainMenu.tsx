import { MenuButton } from './MenuButton.tsx';

export const MainMenu = () => {
    /**
     * TODO: Placeholder for Join Game Logic.
     *   This should show a screen where the player can enter in a game code to join a create game
     * @constructor
     */
    const OnJoinGame = () => {
        console.log('Join Game');
    };

    /**
     * TODO: Placeholder for Creat game logic.
     *   This should generate a code, take them to the Lobby where other players can join.
     * @constructor
     */
    const OnCreateGame = () => {
        console.log('Create Game');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#003366] to-[#5d0000] text-white">
            <div className="container flex-col items-center justify-center gap-8 px-4 py-16 border-2 border-gray-300 p-6 rounded-lg flex space-x-4 w-96 mx-auto">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">Epic Duels</h1>
                <MenuButton onClick={() => OnCreateGame()}>Create Game</MenuButton>
                <MenuButton onClick={() => OnJoinGame()}>Join Game</MenuButton>
            </div>
        </main>
    );
};
