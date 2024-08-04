import { useState, useEffect } from 'react';
import { config } from '../../config';
import { useRoomId } from '../../hooks/useRoomId';
import { v4 as uuid } from 'uuid';
import useStateRef from 'react-usestateref';
import {
    HttpTransportType,
    HubConnection,
    HubConnectionBuilder,
    HubConnectionState,
    LogLevel,
} from '@microsoft/signalr';
import { GameState } from '../../interfaces/game-state.interface';
import { Lobby } from './Lobby/Lobby';

/**
 * Base Component for the Lobby and the Game.
 * Will create the SinglaR connection
 * @returns
 */
export const Room = () => {
    const [persistentId] = useState<string>(() => localStorage.getItem('persistentId') ?? uuid());
    const [roomId, roomIdRef] = useRoomId();
    const [connection, setConnection, connectionRef] = useStateRef<HubConnection>();
    const [connectionError, setConnectionError] = useState<string>();
    const [gameState, setGameState] = useState<GameState>();

    useEffect(() => {
        if (roomId && persistentId) {
            if (connectionRef.current?.state === HubConnectionState.Connected) {
                connectionRef.current?.stop();
            }
            CreateConnection();
        }
    }, [roomId, persistentId, connectionRef]);

    /**
     * Creates the SignalR connection to the backend.
     */
    const CreateConnection = () => {
        const hubUrl = `${config.api}/server`;
        console.log('connecting to: ', hubUrl);
        // Builds the SignalR connection, mapping it to /server
        const signalRConnection = new HubConnectionBuilder()
            .withUrl(hubUrl, {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets,
                accessTokenFactory: () => persistentId,
            })
            .configureLogging(LogLevel.Information)
            .build();

        signalRConnection
            ?.start()
            .then(() => {
                setConnection(signalRConnection);
                ConnectionStatusUpdated();
            })
            .catch((e) => {
                console.log(e);
                setConnectionError('Could not connect to the server');
            });
    };

    /**
     * Perfoms actions when the connection status is updated.
     */
    const ConnectionStatusUpdated = () => {
        switch (connectionRef.current?.state) {
            case HubConnectionState.Connected:
                connectionRef.current?.onclose((error) => {
                    if (error) {
                        ConnectionStatusUpdated();
                        setConnection(undefined);
                        CreateConnection();
                    } else {
                        connectionRef.current?.off('UpdateGameState', UpdateGameState);
                    }
                });
                connectionRef.current?.on('UpdateGameState', UpdateGameState);
                JoinRoom();

                break;
            case HubConnectionState.Disconnected:
                connectionRef.current?.off('UpdateGameState', UpdateGameState);
                break;
            default:
                break;
        }
    };

    /**
     * Joins a room with an existing connection
     * @returns
     */
    const JoinRoom = () => {
        if (roomIdRef?.current) {
            connectionRef.current?.invoke('JoinRoom', roomIdRef?.current);
        }
    };

    /**
     * Update the game state from the websocket connection.
     * @param updatedGameState
     */
    const UpdateGameState = (updatedGameState: GameState) => {
        setGameState({ ...updatedGameState });
        console.log(gameState);
    };

    return (
        <>
            {!!gameState && <div>Game</div>}

            <Lobby></Lobby>
        </>
    );
};
