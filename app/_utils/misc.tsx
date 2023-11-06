/**
 * Given a string, replace the [DATE] with the subsequent month and day strings. Don't change [DATE] without also
 * changing the value in .env/.env.local
 * @param {string} subject The string containing the pattern(s) to replace with the date.
 * @param {string} month The string month eg May.
 * @param {string} day The string day (zero filled) eg 04.
 * @returns {string} The completed replacement having swapped any instances of [DATE] with (eg) May 04.
 */
export const dateReplace = (subject: string, month: string, day: string) => {
    return subject.replaceAll('[DATE]', `${month} ${day}`);
};