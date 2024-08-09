import { Player } from '../../../interfaces/player.interface.ts';
import { MenuHeader } from '../MenuHeader.tsx';
import { LobbyGameSettings } from './LobbyGameSettings.tsx';
import { LobbyPlayers } from './LobbyPlayers.tsx';

import { MenuButton } from '../../Shared/MenuButton.tsx';
import { useRoomId } from '../../../hooks/useRoomId.ts';
import { HubConnection } from '@microsoft/signalr';
import { GameState } from '../../../interfaces/game-state.interface.ts';
import { useEffect, useState } from 'react';
import { LobbyData } from '../../../interfaces/lobby-data.interface.ts';
import { PlayerCard } from '../../Players/PlayerCard.tsx';

/**
 * Lobby where players will:
 *  Join a game -- They will have already joined a game before getting to the lobby
 *  Select a map
 *  Select characters
 *  Start the game
 *
 */
interface LobbyProps {
    roomId: string;
    connection: HubConnection | undefined;
    playerId: string;
    gameState: GameState | undefined;
    onBack: () => void;
    connectionError: string | undefined;
}
export const Lobby = ({ roomId, connection, playerId, gameState, onBack, connectionError }: LobbyProps) => {
    // TODO: Fetch players dynamically
    // const players: Player[] = [
    //     { avatar: ObiWan, name: 'Ryan', team: 1 },
    //     { avatar: MaceWindu, name: 'Justin', team: 1 },
    //     { avatar: Vader, name: 'Nathan', team: 2 },
    //     { avatar: Emporer, name: 'Adam', team: 2 },
    // ];

    const [lobbyData, setLobbyData] = useState<LobbyData>();
    const [inLobby, setInLobby] = useState<boolean>(false);

    const updateLobbyData = (updatedLobby: LobbyData) => {
        console.log(updatedLobby);
        setLobbyData(updatedLobby);
        setInLobby(updatedLobby !== null);
    };

    useEffect(() => {
        if (!connection) {
            return;
        }
        connection.on('UpdateLobbyState', updateLobbyData);

        return () => {
            connection.off('UpdateLobbyState', updateLobbyData);
        };
    });

    return (
        <div className="relative bg-[#2e2e2e] bg-opacity-50  rounded-[12px] text-whitesmoke h-[1000px] max-w-[1200px] shadow-[0px_40px_200px_rgba(0,0,0,0.56)] w-[calc(100%_-_140px)] p-[10px_50px_50px_50px] sm:w-[calc(100%_-_70px)] sm:p-[10px_20px_30px_20px]">
            <MenuHeader>Lobby</MenuHeader>
            <div className="relative flex mt-20">
                <div className="flex-none w-1/3 ">
                    <LobbyGameSettings roomId={roomId}></LobbyGameSettings>
                </div>

                <div className="h-[900px] min-h-[1em] w-1 self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

                <div className="flex-1 ps-5">
                    {lobbyData && (
                        <div className="p-4">
                            {lobbyData.gamePlayers
                                .sort((a, b) => a.teamNumber - b.teamNumber)
                                .map((player, index) => (
                                    <PlayerCard key={index} player={player} />
                                ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 right-0 flex space-x-4 pb-4 pr-4 ">
                <MenuButton onClick={() => {}}>Start Game</MenuButton>
                <MenuButton onClick={() => {}}>Quit</MenuButton>
            </div>
        </div>
    );
};
