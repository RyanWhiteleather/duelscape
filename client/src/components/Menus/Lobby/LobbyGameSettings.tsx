import { MapSelector } from './MapSelector';

export const LobbyGameSettings = () => {
    return (
        <div className="p-4">
            <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
                <div className="flex-1 text-white text-center text-2xl">Game Code</div>

                {/* TODO: Allow team selector and adjust color based on team number */}
                <input
                    type="text"
                    value="ASD123"
                    className="w-32 h-8 rounded bg-gray-700 text-white p-2 text-xl text-center"
                    readOnly
                />
            </div>
            <MapSelector></MapSelector>
        </div>
    );
};
