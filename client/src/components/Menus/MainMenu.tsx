import { MenuButton } from './MenuButton.tsx';
import { Footer } from './Footer.tsx';

export const MainMenu = () => {
    /**
     * TODO: Placeholder for Join Game Logic.
     *   This should show a screen where the player can enter in a game code to join a create game
     */
    const OnJoinGame = () => {
        console.log('Join Game');
    };

    /**
     * TODO: Placeholder for Create game logic.
     *   This should generate a code, take them to the Lobby where other players can join.
     */
    const OnCreateGame = () => {
        console.log('Create Game');
    };

    /**
     * TODO: Placeholder for View Characters logic.
     *   This should go to a screen that has all available characters and their decks.
     */
    const OnViewCharacters = () => {
        console.log('View Characters');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#000000] via-[#003366] to-[#5d0000] text-white">
            <div className="relative container flex-col items-center justify-center gap-8 px-4 py-16  p-6 rounded-lg flex space-x-4 w-96 mx-auto">
                <Footer />
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">DuelScape</h1>
                <div className="flex space-x-4 ">
                    <MenuButton onClick={() => OnCreateGame()}>Create Game</MenuButton>
                    <MenuButton onClick={() => OnJoinGame()}>Join Game</MenuButton>
                </div>

                <MenuButton onClick={() => OnViewCharacters()}>View Characters</MenuButton>
            </div>
        </main>
    );
};
