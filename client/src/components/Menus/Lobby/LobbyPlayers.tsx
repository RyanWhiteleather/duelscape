import { Player } from '../../../interfaces/player.interface';
import { PlayerCard } from '../../Players/PlayerCard';

interface LobbyPlayersProps {
    players: Player[];
}

export const LobbyPlayers = ({ players }: LobbyPlayersProps) => {
    return (
        <div className="p-4">
            {players
                .sort((a, b) => a.teamNumber - b.teamNumber)
                .map((player, index) => (
                    <PlayerCard key={index} player={player} />
                ))}
        </div>
    );
};
