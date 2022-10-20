
import frenchSeed from './frenchSeed';
import germanSeed from './germanSeed';
import italianSeed from './italianSeed';
import portugueseSeed from './portugueseSeed';
import spanishSeed from './spanishSeed';


export function determineSeedToUse (newLanguage: string) {
    if (newLanguage === 'french') {
        return frenchSeed
    } else if (newLanguage === 'german') {
        return germanSeed
    } else if (newLanguage === 'italian') {
        return italianSeed
    } else if (newLanguage === 'portuguese') {
        return portugueseSeed
    } else if (newLanguage === 'spanish') {
        return spanishSeed
    }
}
