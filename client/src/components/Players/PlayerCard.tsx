import { useState } from 'react';
import { Player } from './player.interface';
import { ReadyCheckbox } from '../Menus/Lobby/ReadyCheckbox';

interface PlayerCardProps {
    player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
    const [isReady, setIsReady] = useState(false);

    const handleCheckboxChange = () => {
        setIsReady(!isReady);
    };

    /**
     * Returns the string representation of the team.
     * @param team
     * @returns
     */
    const getTeamName = (team: number): string => {
        switch (team) {
            case 1:
                return 'Team 1';
            case 2:
                return 'Team 2';
            default:
                return '';
        }
    };

    return (
        <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
            {/* TODO: Get avatar for selected character, link to character selector menu */}
            <img src={player.avatar} alt="avatar" className=" h-20 rounded-full mr-4" />
            <div className="flex-1 text-white text-center text-2xl">{player.name}</div>

            {/* TODO: Allow team selector and adjust color based on team number */}
            <input
                type="text"
                value={getTeamName(player.team)}
                className="w-32 h-8 rounded bg-gray-700 text-white p-2 text-xl text-center"
                readOnly
            />

            <div className="ml-16">
                <ReadyCheckbox isChecked={isReady} onChange={handleCheckboxChange} />
            </div>
        </div>
    );
};
