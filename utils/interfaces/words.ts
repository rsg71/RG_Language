export interface IWordSeed {
    number: number;
    word: string;
    translation: string;
    answeredCorrectly: boolean;
    lastDateAnsweredCorrectly: Date | null;
    instancesWordHasBeenSeen: number;
    nextReviewDate: Date | null;
}