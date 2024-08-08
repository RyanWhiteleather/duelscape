import { Player } from "../../players/models/player.interface";

/**
 * Data that conatins conection information for the Lobby
 */
export interface LobbyData {
  gamePlayers: Player[];
  gameStarted: boolean;
}
