import { useEffect } from 'react';
import useStateRef from 'react-usestateref';

interface ReadOnlyRefObject<T> {
    readonly current: T;
}

/**
 * Gets the RoomId pased on the window location.
 * @returns 
 */
export const useRoomId = (): [string, ReadOnlyRefObject<string>] => {
    const [roomId, setRoomId, roomIdRef] = useStateRef<string>('');

    useEffect(() => {
        const newRoomId = window.location.pathname.replace('/', '');
        setRoomId(newRoomId);
    }, [setRoomId]);

    return [roomId, roomIdRef];
};
