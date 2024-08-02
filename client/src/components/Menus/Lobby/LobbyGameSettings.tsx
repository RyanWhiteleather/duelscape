import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { MapSelector } from './MapSelector';

interface LobbyGameSettingsProps {
    roomId: string;
}

export const LobbyGameSettings = ({ roomId }: LobbyGameSettingsProps) => {
    /**
     * Copies the roomId (Game Code) to the clipboard
     * @param event
     */
    const copyRoomId = () => {
        navigator.clipboard.writeText(roomId);
    };

    return (
        <div className="p-4">
            <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
                <div className="flex-1 text-white pl-1 text-2xl">Game Code</div>
                <input
                    type="text"
                    value={roomId}
                    className="h-12 w-40  rounded bg-gray-700 text-white p-2 text-xl text-center"
                    readOnly
                />
                <HiOutlineDocumentDuplicate
                    className="h-12 w-8 pl-2 cursor-pointer hover:text-gray-400"
                    onClick={copyRoomId}
                />
            </div>
            <MapSelector></MapSelector>
        </div>
    );
};
