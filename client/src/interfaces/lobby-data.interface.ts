import { Player } from "./player.interface";

export interface LobbyData {
    gamePlayers: Player[];
    gameStarted: boolean;
}