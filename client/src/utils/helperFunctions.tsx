export const capitalizeFirstLetter = (word: string) => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let rest = word.slice(1);
    let final = firstLetter + rest;
    return final;
}