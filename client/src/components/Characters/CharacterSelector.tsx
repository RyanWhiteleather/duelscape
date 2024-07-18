interface CharacterSelectorProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CharacterSelector: React.FC<CharacterSelectorProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Select Character</h2>
                    <button onClick={onClose} className="text-red-500 hover:text-red-700">
                        Close
                    </button>
                </div>
                <div className="text-white">
                    {/* Character selection content goes here */}
                    <p>Character selection content goes here.</p>
                </div>
            </div>
        </div>
    );
};
