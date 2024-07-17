import { Player } from './player.interface';

interface PlayerCardProps {
    player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
    return (
        <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
            {/* TODO: Get avatar for selected character, link to character selector menu */}
            <img src="/vite.svg" alt="avatar" className="w-20 h-20 rounded-full mr-4" />
            <div className="flex-1 text-white text-center">{player.name}</div>

            {/* TODO: Allow team selector and adjust color based on team number */}
            <input type="text" value={player.team} className="w-16 h-8 rounded bg-gray-700 text-white p-1" readOnly />
        </div>
    );
};
