import LanguagesJson from '../data/languages.json';


export const capitalizeFirstLetter = (word: string) => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let rest = word.slice(1);
    let final = firstLetter + rest;
    return final;
}


export const determineFlag = (language: string) => {
    if (language === 'portuguese') { return 'brazil' }
    else if (language === 'french') { return 'france' }
    else if (language === 'german') { return 'germany' }
    else if (language === 'italian') { return 'italy' }
    else if (language === 'spanish') { return 'spain' }
    else if (language === 'swedish') { return 'sweden' }
}

export const determineBgColor = (language: string) => {
    let foundLanguage = LanguagesJson.find(l => l.languageLowerCase === language) as any;
    if (!foundLanguage) {
        return "na"
    }
    let backgroundColor = foundLanguage.bg;
    return backgroundColor;
}