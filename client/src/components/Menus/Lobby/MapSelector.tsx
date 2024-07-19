import { useState } from 'react';

export const MapSelector = () => {
    const [selectedMap, setSelectedMap] = useState('Kamino Platform');

    const handleChange = (event) => {
        setSelectedMap(event.target.value);
    };

    return (
        <div className="flex items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2">
            <div className="flex-1 text-white pl-1 text-2xl">Map</div>
            <select
                value={selectedMap}
                onChange={handleChange}
                className="h-12 rounded bg-gray-700 text-white p-2 text-xl text-center"
            >
                {/* TODO: Don't hardcode these values */}
                <option value="Kamino Platform">Kamino Platform</option>
                <option value="Geonosis Arena">Geonosis Arena</option>
                <option value="Carbon-freezing chamber">Carbon-freezing chamber</option>
                <option value="Emperor's Throneroom">Emperor's Throneroom</option>
            </select>
        </div>
    );
};
