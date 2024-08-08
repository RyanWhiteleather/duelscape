
/**
 * Creates a random game code 
 * @param length - defaults to 6 digits
 * @returns random game code of letters and numbers
 */
export function generateGameCode(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}