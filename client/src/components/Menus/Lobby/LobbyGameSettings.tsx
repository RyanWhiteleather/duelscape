import { MapSelector } from './MapSelector';

export const LobbyGameSettings = () => {
    /**
     * Copies the input field onClick
     * @param event
     */
    const handleCopy = (event: React.MouseEvent<HTMLInputElement>) => {
        navigator.clipboard.writeText(event.currentTarget.value).then(() => {
            // Optional: Provide feedback to the user that the text has been copied
            alert('Copied to clipboard: ' + event.currentTarget.value);
        });
    };
    return (
        <div className="p-4">
            <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
                <div className="flex-1 text-white pl-1 text-2xl">Game Code</div>
                <input
                    type="text"
                    value="ASD123"
                    className="h-12 w-40  rounded bg-gray-700 text-white p-2 text-xl text-center cursor-pointer"
                    readOnly
                    onClick={handleCopy}
                />
            </div>
            <MapSelector></MapSelector>
        </div>
    );
};
