import { Player } from '../../Players/player.interface.ts';
import { MenuHeader } from '../MenuHeader.tsx';
import { LobbyGameSettings } from './LobbyGameSettings.tsx';
import { LobbyPlayers } from './LobbyPlayers.tsx';

import ObiWan from '../../../assets/character-avatars/Obi-Wan.png';
import MaceWindu from '../../../assets/character-avatars/Mace-Windu.png';
import Vader from '../../../assets/character-avatars/Vader.png';
import Emporer from '../../../assets/character-avatars/Emperor.png';
import { MenuButton } from '../../Shared/MenuButton.tsx';

/**
 * Lobby where players will:
 *  Join a game -- They will have already joined a game before getting to the lobby
 *  Select a map
 *  Select characters
 *  Start the game
 *
 */
export const Lobby = () => {
    // TODO: Fetch players dynamically
    const players: Player[] = [
        { avatar: ObiWan, name: 'Ryan', team: 1 },
        { avatar: MaceWindu, name: 'Justin', team: 1 },
        { avatar: Vader, name: 'Nathan', team: 2 },
        { avatar: Emporer, name: 'Adam', team: 2 },
    ];
    return (
        <div className="relative bg-[#2e2e2e] bg-opacity-50  rounded-[12px] text-whitesmoke h-[1000px] max-w-[1200px] shadow-[0px_40px_200px_rgba(0,0,0,0.56)] w-[calc(100%_-_140px)] p-[10px_50px_50px_50px] sm:w-[calc(100%_-_70px)] sm:p-[10px_20px_30px_20px]">
            <MenuHeader>Lobby</MenuHeader>
            <div className="relative flex mt-20">
                <div className="flex-none w-1/3 ">
                    <LobbyGameSettings></LobbyGameSettings>
                </div>

                <div className="h-[900px] min-h-[1em] w-1 self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

                <div className="flex-1 ps-5">
                    <LobbyPlayers players={players} />
                </div>
            </div>

            <div className="absolute bottom-0 right-0 flex space-x-4 pb-4 pr-4 ">
                <MenuButton onClick={() => {}}>Start Game</MenuButton>
                <MenuButton onClick={() => {}}>Quit</MenuButton>
            </div>
        </div>
    );
};
