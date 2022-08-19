"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const italianSeed = [
    {
        "number": 1,
        "word": "sono",
        "translation": "I am",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 2,
        "word": "io",
        "translation": "I",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 3,
        "word": "il suo",
        "translation": "his",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 4,
        "word": "che",
        "translation": "that",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 5,
        "word": "lui",
        "translation": "he",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 6,
        "word": "era",
        "translation": "he/she was",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 7,
        "word": "per",
        "translation": "for",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 8,
        "word": "su",
        "translation": "on",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 9,
        "word": "come",
        "translation": "as/like",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 10,
        "word": "con",
        "translation": "with",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 11,
        "word": "loro",
        "translation": "they",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 12,
        "word": "essere",
        "translation": "to be",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 13,
        "word": "a",
        "translation": "at",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 14,
        "word": "uno",
        "translation": "one",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 15,
        "word": "avere",
        "translation": "to have",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 16,
        "word": "questo",
        "translation": "this",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 17,
        "word": "da",
        "translation": "from",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 18,
        "word": "di",
        "translation": "by",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 19,
        "word": "caldo",
        "translation": "hot",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 20,
        "word": "parola",
        "translation": "word",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 21,
        "word": "ma",
        "translation": "but",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 22,
        "word": "cosa",
        "translation": "what",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 23,
        "word": "alcuni",
        "translation": "some",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 24,
        "word": "è",
        "translation": "is",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 25,
        "word": "quello",
        "translation": "that",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 26,
        "word": "voi",
        "translation": "you (pl)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 27,
        "word": "o",
        "translation": "or",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 28,
        "word": "aveva",
        "translation": "had",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 29,
        "word": "il",
        "translation": "the",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 30,
        "word": "di",
        "translation": "of",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 31,
        "word": "a",
        "translation": "to",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 32,
        "word": "e",
        "translation": "and",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 33,
        "word": "un",
        "translation": "a",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 34,
        "word": "in",
        "translation": "in",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 35,
        "word": "noi",
        "translation": "we",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 36,
        "word": "lattina",
        "translation": "can (of soda)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 37,
        "word": "fuori",
        "translation": "out",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 38,
        "word": "altro",
        "translation": "other",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 39,
        "word": "erano",
        "translation": "were",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 40,
        "word": "che / quale",
        "translation": "which",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 41,
        "word": "fare",
        "translation": "to do/make",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 42,
        "word": "loro",
        "translation": "their",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 43,
        "word": "tempo",
        "translation": "time",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 44,
        "word": "se",
        "translation": "if",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 45,
        "word": "volontà",
        "translation": "will",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 46,
        "word": "come",
        "translation": "how",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 47,
        "word": "detto",
        "translation": "said",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 48,
        "word": "un",
        "translation": "an",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 49,
        "word": "ogni",
        "translation": "each",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 50,
        "word": "dire",
        "translation": "tell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 51,
        "word": "fa",
        "translation": "does",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 52,
        "word": "fisso",
        "translation": "set (unchanging)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 53,
        "word": "tre",
        "translation": "three",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 54,
        "word": "desiderare",
        "translation": "desire",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 55,
        "word": "aria",
        "translation": "air",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 56,
        "word": "bene",
        "translation": "well",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 57,
        "word": "anche",
        "translation": "also",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 58,
        "word": "giocare",
        "translation": "play",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 59,
        "word": "piccolo",
        "translation": "small",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 60,
        "word": "fine",
        "translation": "end",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 61,
        "word": "mettere",
        "translation": "put",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 62,
        "word": "casa",
        "translation": "home",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 63,
        "word": "leggere",
        "translation": "read",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 64,
        "word": "mano",
        "translation": "hand",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 65,
        "word": "portare",
        "translation": "carry",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 66,
        "word": "grande",
        "translation": "large",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 67,
        "word": "compitare",
        "translation": "spell (words)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 68,
        "word": "aggiungere",
        "translation": "add",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 69,
        "word": "anche",
        "translation": "even/also",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 70,
        "word": "terra",
        "translation": "land",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 71,
        "word": "qui",
        "translation": "here",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 72,
        "word": "devo",
        "translation": "I must",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 73,
        "word": "grande",
        "translation": "big",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 74,
        "word": "alto",
        "translation": "high/tall",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 75,
        "word": "tale",
        "translation": "such",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 76,
        "word": "seguire",
        "translation": "follow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 77,
        "word": "atto",
        "translation": "an act",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 78,
        "word": "perché",
        "translation": "why",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 79,
        "word": "chiedere",
        "translation": "ask",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 80,
        "word": "maschi",
        "translation": "men",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 81,
        "word": "cambiamento",
        "translation": "a change",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 82,
        "word": "è andato",
        "translation": "he/she went",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 83,
        "word": "luce",
        "translation": "light",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 84,
        "word": "tipo",
        "translation": "kind (of thing)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 85,
        "word": "spento",
        "translation": "turned off",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 86,
        "word": "bisogno",
        "translation": "need",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 87,
        "word": "casa",
        "translation": "house",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 88,
        "word": "immagine",
        "translation": "image",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 89,
        "word": "provare",
        "translation": "try",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 90,
        "word": "noi",
        "translation": "us",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 91,
        "word": "di nuovo",
        "translation": "again",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 92,
        "word": "animale",
        "translation": "animal",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 93,
        "word": "punto",
        "translation": "point",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 94,
        "word": "madre",
        "translation": "mother",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 95,
        "word": "mondo",
        "translation": "world",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 96,
        "word": "vicino",
        "translation": "near",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 97,
        "word": "costruire",
        "translation": "build",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 98,
        "word": "se stesso",
        "translation": "himself",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 99,
        "word": "terra",
        "translation": "earth",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 100,
        "word": "padre",
        "translation": "father",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 101,
        "word": "qualsiasi",
        "translation": "any",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 102,
        "word": "nuovo",
        "translation": "new",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 103,
        "word": "lavoro",
        "translation": "work",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 104,
        "word": "parte",
        "translation": "part",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 105,
        "word": "prendere",
        "translation": "take",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 106,
        "word": "ottenere",
        "translation": "get",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 107,
        "word": "posto",
        "translation": "place",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 108,
        "word": "fatto",
        "translation": "made",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 109,
        "word": "vivere",
        "translation": "live",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 110,
        "word": "dove",
        "translation": "where",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 111,
        "word": "dopo",
        "translation": "after",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 112,
        "word": "indietro",
        "translation": "back",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 113,
        "word": "poco",
        "translation": "little",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 114,
        "word": "solo",
        "translation": "only",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 115,
        "word": "turno",
        "translation": "round",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 116,
        "word": "uomo",
        "translation": "man",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 117,
        "word": "anno",
        "translation": "year",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 118,
        "word": "è venuto",
        "translation": "came",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 119,
        "word": "spettacolo",
        "translation": "show",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 120,
        "word": "ogni",
        "translation": "every",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 121,
        "word": "buono",
        "translation": "good",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 122,
        "word": "me",
        "translation": "me",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 123,
        "word": "dare",
        "translation": "give",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 124,
        "word": "il nostro",
        "translation": "our",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 125,
        "word": "sotto",
        "translation": "under",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 126,
        "word": "nome",
        "translation": "name",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 127,
        "word": "molto",
        "translation": "very",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 128,
        "word": "attraverso",
        "translation": "through",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 129,
        "word": "solo",
        "translation": "just",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 130,
        "word": "forma",
        "translation": "form",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 131,
        "word": "frase",
        "translation": "sentence",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 132,
        "word": "grande",
        "translation": "great",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 133,
        "word": "pensare",
        "translation": "think",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 134,
        "word": "dire",
        "translation": "say",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 135,
        "word": "aiutare",
        "translation": "help",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 136,
        "word": "basso",
        "translation": "low",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 137,
        "word": "linea",
        "translation": "line",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 138,
        "word": "differire",
        "translation": "differ",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 139,
        "word": "turno",
        "translation": "turn",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 140,
        "word": "causa",
        "translation": "cause",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 141,
        "word": "molto",
        "translation": "much",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 142,
        "word": "dire",
        "translation": "mean",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 143,
        "word": "prima",
        "translation": "before",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 144,
        "word": "spostare",
        "translation": "move",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 145,
        "word": "diritto",
        "translation": "right",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 146,
        "word": "ragazzo",
        "translation": "boy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 147,
        "word": "vecchio",
        "translation": "old",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 148,
        "word": "troppo",
        "translation": "too",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 149,
        "word": "stesso",
        "translation": "same",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 150,
        "word": "lei",
        "translation": "she",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 151,
        "word": "tutto",
        "translation": "all",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 152,
        "word": "ci",
        "translation": "there",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 153,
        "word": "quando",
        "translation": "when",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 154,
        "word": "su",
        "translation": "up",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 155,
        "word": "uso",
        "translation": "use",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 156,
        "word": "il tuo",
        "translation": "your",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 157,
        "word": "modo",
        "translation": "way",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 158,
        "word": "circa",
        "translation": "about",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 159,
        "word": "molti",
        "translation": "many",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 160,
        "word": "allora",
        "translation": "then",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 161,
        "word": "loro",
        "translation": "them",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 162,
        "word": "scrivere",
        "translation": "write",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 163,
        "word": "sarebbe",
        "translation": "would",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 164,
        "word": "come",
        "translation": "like",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 165,
        "word": "così",
        "translation": "so",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 166,
        "word": "queste",
        "translation": "these",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 167,
        "word": "lei",
        "translation": "her",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 168,
        "word": "lungo",
        "translation": "long",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 169,
        "word": "rendere",
        "translation": "make",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 170,
        "word": "cosa",
        "translation": "thing",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 171,
        "word": "vedere",
        "translation": "see",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 172,
        "word": "lui",
        "translation": "him",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 173,
        "word": "due",
        "translation": "two",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 174,
        "word": "ha",
        "translation": "has",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 175,
        "word": "guardare",
        "translation": "look",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 176,
        "word": "di più",
        "translation": "more",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 177,
        "word": "giorno",
        "translation": "day",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 178,
        "word": "potuto",
        "translation": "could",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 179,
        "word": "andare",
        "translation": "go",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 180,
        "word": "venire",
        "translation": "come",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 181,
        "word": "ha fatto",
        "translation": "did",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 182,
        "word": "numero",
        "translation": "number",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 183,
        "word": "suono",
        "translation": "sound",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 184,
        "word": "no",
        "translation": "no",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 185,
        "word": "più",
        "translation": "most",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 186,
        "word": "persone",
        "translation": "people",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 187,
        "word": "il mio",
        "translation": "my",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 188,
        "word": "oltre",
        "translation": "over",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 189,
        "word": "sapere",
        "translation": "know",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 190,
        "word": "acqua",
        "translation": "water",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 191,
        "word": "di",
        "translation": "than",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 192,
        "word": "chiamata",
        "translation": "call",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 193,
        "word": "primo",
        "translation": "first",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 194,
        "word": "che",
        "translation": "who",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 195,
        "word": "può",
        "translation": "may",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 196,
        "word": "giù",
        "translation": "down",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 197,
        "word": "lato",
        "translation": "side",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 198,
        "word": "stato",
        "translation": "been",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 199,
        "word": "ora",
        "translation": "now",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 200,
        "word": "trovare",
        "translation": "find",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 201,
        "word": "testa",
        "translation": "head",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 202,
        "word": "stare in piedi",
        "translation": "stand",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 203,
        "word": "proprio",
        "translation": "own",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 204,
        "word": "pagina",
        "translation": "page",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 205,
        "word": "dovrebbe",
        "translation": "should",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 206,
        "word": "paese",
        "translation": "country",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 207,
        "word": "fondare",
        "translation": "found",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 208,
        "word": "risposta",
        "translation": "answer",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 209,
        "word": "scuola",
        "translation": "school",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 210,
        "word": "crescere",
        "translation": "grow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 211,
        "word": "studio",
        "translation": "study",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 212,
        "word": "ancora",
        "translation": "still",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 213,
        "word": "imparare",
        "translation": "learn",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 214,
        "word": "impianto",
        "translation": "plant",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 215,
        "word": "copertura",
        "translation": "cover",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 216,
        "word": "cibo",
        "translation": "food",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 217,
        "word": "sole",
        "translation": "sun",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 218,
        "word": "quattro",
        "translation": "four",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 219,
        "word": "fra",
        "translation": "between",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 220,
        "word": "stato",
        "translation": "state",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 221,
        "word": "mantenere",
        "translation": "keep",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 222,
        "word": "occhio",
        "translation": "eye",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 223,
        "word": "mai",
        "translation": "never",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 224,
        "word": "ultimo",
        "translation": "last",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 225,
        "word": "lasciare",
        "translation": "let",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 226,
        "word": "pensiero",
        "translation": "thought",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 227,
        "word": "città",
        "translation": "city",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 228,
        "word": "albero",
        "translation": "tree",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 229,
        "word": "attraversare",
        "translation": "cross",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 230,
        "word": "fattoria",
        "translation": "farm",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 231,
        "word": "difficile",
        "translation": "hard",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 232,
        "word": "inizio",
        "translation": "start",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 233,
        "word": "forza",
        "translation": "might",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 234,
        "word": "storia",
        "translation": "story",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 235,
        "word": "sega",
        "translation": "saw",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 236,
        "word": "lontano",
        "translation": "far",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 237,
        "word": "mare",
        "translation": "sea",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 238,
        "word": "disegnare",
        "translation": "draw",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 239,
        "word": "sinistra",
        "translation": "left",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 240,
        "word": "tardi",
        "translation": "late",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 241,
        "word": "run",
        "translation": "run",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 242,
        "word": "non",
        "translation": "don’t",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 243,
        "word": "mentre",
        "translation": "while",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 244,
        "word": "stampa",
        "translation": "press",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 245,
        "word": "close",
        "translation": "close",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 246,
        "word": "notte",
        "translation": "night",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 247,
        "word": "reale",
        "translation": "real",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 248,
        "word": "vita",
        "translation": "life",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 249,
        "word": "pochi",
        "translation": "few",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 250,
        "word": "nord",
        "translation": "north",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 251,
        "word": "libro",
        "translation": "book",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 252,
        "word": "portare",
        "translation": "carry",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 253,
        "word": "ha preso",
        "translation": "took",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 254,
        "word": "scienza",
        "translation": "science",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 255,
        "word": "mangiare",
        "translation": "eat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 256,
        "word": "camera",
        "translation": "room",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 257,
        "word": "amico",
        "translation": "friend",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 258,
        "word": "ha iniziato",
        "translation": "began",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 259,
        "word": "idea",
        "translation": "idea",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 260,
        "word": "pesce",
        "translation": "fish",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 261,
        "word": "montagna",
        "translation": "mountain",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 262,
        "word": "stop",
        "translation": "stop",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 263,
        "word": "una volta",
        "translation": "once",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 264,
        "word": "base",
        "translation": "base",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 265,
        "word": "sentire",
        "translation": "hear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 266,
        "word": "cavallo",
        "translation": "horse",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 267,
        "word": "taglio",
        "translation": "cut",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 268,
        "word": "sicuro",
        "translation": "sure",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 269,
        "word": "orologio",
        "translation": "watch",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 270,
        "word": "colore",
        "translation": "color",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 271,
        "word": "volto",
        "translation": "face",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 272,
        "word": "legno",
        "translation": "wood",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 273,
        "word": "principale",
        "translation": "main",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 274,
        "word": "aperto",
        "translation": "open",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 275,
        "word": "sembrare",
        "translation": "seem",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 276,
        "word": "insieme",
        "translation": "together",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 277,
        "word": "prossimo",
        "translation": "next",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 278,
        "word": "bianco",
        "translation": "white",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 279,
        "word": "bambini",
        "translation": "children",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 280,
        "word": "inizio",
        "translation": "begin",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 281,
        "word": "ottenuto",
        "translation": "got",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 282,
        "word": "camminare",
        "translation": "walk",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 283,
        "word": "esempio",
        "translation": "example",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 284,
        "word": "alleviare",
        "translation": "ease",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 285,
        "word": "carta",
        "translation": "paper",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 286,
        "word": "gruppo",
        "translation": "group",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 287,
        "word": "sempre",
        "translation": "always",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 288,
        "word": "musica",
        "translation": "music",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 289,
        "word": "quelli",
        "translation": "those",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 290,
        "word": "entrambi",
        "translation": "both",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 291,
        "word": "marchio",
        "translation": "mark",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 292,
        "word": "spesso",
        "translation": "often",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 293,
        "word": "lettera",
        "translation": "letter",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 294,
        "word": "fino a quando",
        "translation": "until",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 295,
        "word": "miglio",
        "translation": "mile",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 296,
        "word": "fiume",
        "translation": "river",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 297,
        "word": "auto",
        "translation": "car",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 298,
        "word": "piedi",
        "translation": "feet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 299,
        "word": "cura",
        "translation": "care",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 300,
        "word": "secondo",
        "translation": "second",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 301,
        "word": "abbastanza",
        "translation": "enough",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 302,
        "word": "pianura",
        "translation": "plain",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 303,
        "word": "ragazza",
        "translation": "girl",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 304,
        "word": "solito",
        "translation": "usual",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 305,
        "word": "giovane",
        "translation": "young",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 306,
        "word": "pronto",
        "translation": "ready",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 307,
        "word": "sopra",
        "translation": "above",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 308,
        "word": "mai",
        "translation": "ever",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 309,
        "word": "rosso",
        "translation": "red",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 310,
        "word": "elenco",
        "translation": "list",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 311,
        "word": "anche se",
        "translation": "though",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 312,
        "word": "sentire",
        "translation": "feel",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 313,
        "word": "Discussioni",
        "translation": "talk",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 314,
        "word": "uccello",
        "translation": "bird",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 315,
        "word": "presto",
        "translation": "soon",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 316,
        "word": "corpo",
        "translation": "body",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 317,
        "word": "cane",
        "translation": "dog",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 318,
        "word": "famiglia",
        "translation": "family",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 319,
        "word": "diretto",
        "translation": "direct",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 320,
        "word": "posa",
        "translation": "pose",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 321,
        "word": "lasciare",
        "translation": "leave",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 322,
        "word": "canzone",
        "translation": "song",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 323,
        "word": "misurare",
        "translation": "measure",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 324,
        "word": "porta",
        "translation": "door",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 325,
        "word": "prodotto",
        "translation": "product",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 326,
        "word": "nero",
        "translation": "black",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 327,
        "word": "breve",
        "translation": "short",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 328,
        "word": "numerale",
        "translation": "numeral",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 329,
        "word": "classe",
        "translation": "class",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 330,
        "word": "vento",
        "translation": "wind",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 331,
        "word": "domanda",
        "translation": "question",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 332,
        "word": "accadere",
        "translation": "happen",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 333,
        "word": "integrale",
        "translation": "complete",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 334,
        "word": "nave",
        "translation": "ship",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 335,
        "word": "area",
        "translation": "area",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 336,
        "word": "metà",
        "translation": "half",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 337,
        "word": "rock",
        "translation": "rock",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 338,
        "word": "ordine",
        "translation": "order",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 339,
        "word": "fuoco",
        "translation": "fire",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 340,
        "word": "sud",
        "translation": "south",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 341,
        "word": "problema",
        "translation": "problem",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 342,
        "word": "pezzo",
        "translation": "piece",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 343,
        "word": "ha detto",
        "translation": "told",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 344,
        "word": "sapeva",
        "translation": "knew",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 345,
        "word": "passare",
        "translation": "pass",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 346,
        "word": "da",
        "translation": "since",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 347,
        "word": "top",
        "translation": "top",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 348,
        "word": "tutto",
        "translation": "whole",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 349,
        "word": "re",
        "translation": "king",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 350,
        "word": "strada",
        "translation": "street",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 351,
        "word": "pollice",
        "translation": "inch",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 352,
        "word": "moltiplicare",
        "translation": "multiply",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 353,
        "word": "niente",
        "translation": "nothing",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 354,
        "word": "corso",
        "translation": "course",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 355,
        "word": "soggiornare",
        "translation": "stay",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 356,
        "word": "ruota",
        "translation": "wheel",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 357,
        "word": "completo",
        "translation": "full",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 358,
        "word": "vigore",
        "translation": "force",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 359,
        "word": "blu",
        "translation": "blue",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 360,
        "word": "oggetto",
        "translation": "object",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 361,
        "word": "decidere",
        "translation": "decide",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 362,
        "word": "superficie",
        "translation": "surface",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 363,
        "word": "profondità",
        "translation": "deep",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 364,
        "word": "luna",
        "translation": "moon",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 365,
        "word": "isola",
        "translation": "island",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 366,
        "word": "piede",
        "translation": "foot",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 367,
        "word": "sistema",
        "translation": "system",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 368,
        "word": "occupato",
        "translation": "busy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 369,
        "word": "test",
        "translation": "test",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 370,
        "word": "record",
        "translation": "record",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 371,
        "word": "barca",
        "translation": "boat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 372,
        "word": "comune",
        "translation": "common",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 373,
        "word": "oro",
        "translation": "gold",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 374,
        "word": "possibile",
        "translation": "possible",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 375,
        "word": "piano",
        "translation": "plane",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 376,
        "word": "vece",
        "translation": "stead",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 377,
        "word": "asciutto",
        "translation": "dry",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 378,
        "word": "meraviglia",
        "translation": "wonder",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 379,
        "word": "ridere",
        "translation": "laugh",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 380,
        "word": "migliaia",
        "translation": "thousand",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 381,
        "word": "fa",
        "translation": "ago",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 382,
        "word": "corse",
        "translation": "ran",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 383,
        "word": "controllare",
        "translation": "check",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 384,
        "word": "gioco",
        "translation": "game",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 385,
        "word": "forma",
        "translation": "shape",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 386,
        "word": "uguagliare",
        "translation": "equate",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 387,
        "word": "caldo",
        "translation": "hot",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 388,
        "word": "perdere",
        "translation": "miss",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 389,
        "word": "portato",
        "translation": "brought",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 390,
        "word": "calore",
        "translation": "heat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 391,
        "word": "neve",
        "translation": "snow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 392,
        "word": "pneumatico",
        "translation": "tire",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 393,
        "word": "portare",
        "translation": "bring",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 394,
        "word": "sì",
        "translation": "yes",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 395,
        "word": "lontano",
        "translation": "distant",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 396,
        "word": "riempire",
        "translation": "fill",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 397,
        "word": "est",
        "translation": "east",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 398,
        "word": "dipingere",
        "translation": "paint",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 399,
        "word": "lingua",
        "translation": "language",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 400,
        "word": "tra",
        "translation": "among",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 401,
        "word": "unità",
        "translation": "unit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 402,
        "word": "potenza",
        "translation": "power",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 403,
        "word": "città",
        "translation": "town",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 404,
        "word": "fine",
        "translation": "fine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 405,
        "word": "certo",
        "translation": "certain",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 406,
        "word": "volare",
        "translation": "fly",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 407,
        "word": "cadere",
        "translation": "fall",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 408,
        "word": "portare",
        "translation": "lead",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 409,
        "word": "grido",
        "translation": "cry",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 410,
        "word": "scuro",
        "translation": "dark",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 411,
        "word": "macchina",
        "translation": "machine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 412,
        "word": "nota",
        "translation": "note",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 413,
        "word": "aspettare",
        "translation": "wait",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 414,
        "word": "piano",
        "translation": "plan",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 415,
        "word": "figura",
        "translation": "figure",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 416,
        "word": "stella",
        "translation": "star",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 417,
        "word": "scatola",
        "translation": "box",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 418,
        "word": "sostantivo",
        "translation": "noun",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 419,
        "word": "campo",
        "translation": "field",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 420,
        "word": "resto",
        "translation": "rest",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 421,
        "word": "corretto",
        "translation": "correct",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 422,
        "word": "in grado di",
        "translation": "able",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 423,
        "word": "libbra",
        "translation": "pound",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 424,
        "word": "done",
        "translation": "done",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 425,
        "word": "bellezza",
        "translation": "beauty",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 426,
        "word": "unità",
        "translation": "drive",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 427,
        "word": "sorgeva",
        "translation": "stood",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 428,
        "word": "contenere",
        "translation": "contain",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 429,
        "word": "frontale",
        "translation": "front",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 430,
        "word": "insegnare",
        "translation": "teach",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 431,
        "word": "settimana",
        "translation": "week",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 432,
        "word": "finale",
        "translation": "final",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 433,
        "word": "ha dato",
        "translation": "gave",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 434,
        "word": "verde",
        "translation": "green",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 435,
        "word": "oh",
        "translation": "oh",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 436,
        "word": "veloce",
        "translation": "quick",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 437,
        "word": "sviluppare",
        "translation": "develop",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 438,
        "word": "oceano",
        "translation": "ocean",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 439,
        "word": "caldo",
        "translation": "warm",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 440,
        "word": "gratuito",
        "translation": "free",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 441,
        "word": "minuto",
        "translation": "minute",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 442,
        "word": "forte",
        "translation": "strong",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 443,
        "word": "speciale",
        "translation": "special",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 444,
        "word": "mente",
        "translation": "mind",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 445,
        "word": "dietro",
        "translation": "behind",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 446,
        "word": "chiaro",
        "translation": "clear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 447,
        "word": "coda",
        "translation": "tail",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 448,
        "word": "produrre",
        "translation": "produce",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 449,
        "word": "fatto",
        "translation": "fact",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 450,
        "word": "spazio",
        "translation": "space",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 451,
        "word": "sentito",
        "translation": "heard",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 452,
        "word": "migliore",
        "translation": "best",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 453,
        "word": "ora",
        "translation": "hour",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 454,
        "word": "meglio",
        "translation": "better",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 455,
        "word": "vero",
        "translation": true,
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 456,
        "word": "durante",
        "translation": "during",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 457,
        "word": "cento",
        "translation": "hundred",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 458,
        "word": "cinque",
        "translation": "five",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 459,
        "word": "ricordare",
        "translation": "remember",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 460,
        "word": "passo",
        "translation": "step",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 461,
        "word": "presto",
        "translation": "early",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 462,
        "word": "tenere",
        "translation": "hold",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 463,
        "word": "ovest",
        "translation": "west",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 464,
        "word": "terra",
        "translation": "ground",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 465,
        "word": "interesse",
        "translation": "interest",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 466,
        "word": "raggiungere",
        "translation": "reach",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 467,
        "word": "veloce",
        "translation": "fast",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 468,
        "word": "verbo",
        "translation": "verb",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 469,
        "word": "cantare",
        "translation": "sing",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 470,
        "word": "ascoltare",
        "translation": "listen",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 471,
        "word": "sei",
        "translation": "six",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 472,
        "word": "tavolo",
        "translation": "table",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 473,
        "word": "viaggi",
        "translation": "travel",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 474,
        "word": "meno",
        "translation": "less",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 475,
        "word": "mattina",
        "translation": "morning",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 476,
        "word": "dieci",
        "translation": "ten",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 477,
        "word": "semplice",
        "translation": "simple",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 478,
        "word": "alcuni",
        "translation": "several",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 479,
        "word": "vocale",
        "translation": "vowel",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 480,
        "word": "verso",
        "translation": "toward",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 481,
        "word": "guerra",
        "translation": "war",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 482,
        "word": "porre",
        "translation": "lay",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 483,
        "word": "contro",
        "translation": "against",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 484,
        "word": "modello",
        "translation": "pattern",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 485,
        "word": "lento",
        "translation": "slow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 486,
        "word": "centro",
        "translation": "center",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 487,
        "word": "amore",
        "translation": "love",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 488,
        "word": "persona",
        "translation": "person",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 489,
        "word": "soldi",
        "translation": "money",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 490,
        "word": "servire",
        "translation": "serve",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 491,
        "word": "apparire",
        "translation": "appear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 492,
        "word": "strada",
        "translation": "road",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 493,
        "word": "mappa",
        "translation": "map",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 494,
        "word": "pioggia",
        "translation": "rain",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 495,
        "word": "regola",
        "translation": "rule",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 496,
        "word": "governare",
        "translation": "govern",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 497,
        "word": "tirare",
        "translation": "pull",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 498,
        "word": "freddo",
        "translation": "cold",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 499,
        "word": "avviso",
        "translation": "notice",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 500,
        "word": "voce",
        "translation": "voice",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 501,
        "word": "energia",
        "translation": "energy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 502,
        "word": "caccia",
        "translation": "hunt",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 503,
        "word": "probabile",
        "translation": "probable",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 504,
        "word": "letto",
        "translation": "bed",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 505,
        "word": "fratello",
        "translation": "brother",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 506,
        "word": "uovo",
        "translation": "egg",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 507,
        "word": "giro",
        "translation": "ride",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 508,
        "word": "cella",
        "translation": "cell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 509,
        "word": "credere",
        "translation": "believe",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 510,
        "word": "forse",
        "translation": "perhaps",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 511,
        "word": "scegliere",
        "translation": "pick",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 512,
        "word": "improvviso",
        "translation": "sudden",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 513,
        "word": "contare",
        "translation": "count",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 514,
        "word": "piazza",
        "translation": "square",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 515,
        "word": "motivo",
        "translation": "reason",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 516,
        "word": "lunghezza",
        "translation": "length",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 517,
        "word": "rappresentare",
        "translation": "represent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 518,
        "word": "arte",
        "translation": "art",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 519,
        "word": "soggetto",
        "translation": "subject",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 520,
        "word": "regione",
        "translation": "region",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 521,
        "word": "dimensione",
        "translation": "size",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 522,
        "word": "variare",
        "translation": "vary",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 523,
        "word": "risolvere",
        "translation": "settle",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 524,
        "word": "parlare",
        "translation": "speak",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 525,
        "word": "peso",
        "translation": "weight",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 526,
        "word": "generale",
        "translation": "general",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 527,
        "word": "ghiaccio",
        "translation": "ice",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 528,
        "word": "materia",
        "translation": "matter",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 529,
        "word": "cerchio",
        "translation": "circle",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 530,
        "word": "coppia",
        "translation": "pair",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 531,
        "word": "includere",
        "translation": "include",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 532,
        "word": "divide",
        "translation": "divide",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 533,
        "word": "sillaba",
        "translation": "syllable",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 534,
        "word": "feltro",
        "translation": "felt",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 535,
        "word": "grande",
        "translation": "grand",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 536,
        "word": "palla",
        "translation": "ball",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 537,
        "word": "ancora",
        "translation": "yet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 538,
        "word": "onda",
        "translation": "wave",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 539,
        "word": "cadere",
        "translation": "drop",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 540,
        "word": "cuore",
        "translation": "heart",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 541,
        "word": "am",
        "translation": "am",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 542,
        "word": "presente",
        "translation": "present",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 543,
        "word": "pesante",
        "translation": "heavy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 544,
        "word": "danza",
        "translation": "dance",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 545,
        "word": "motore",
        "translation": "engine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 546,
        "word": "posizione",
        "translation": "position",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 547,
        "word": "braccio",
        "translation": "arm",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 548,
        "word": "ampio",
        "translation": "wide",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 549,
        "word": "vela",
        "translation": "sail",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 550,
        "word": "materiale",
        "translation": "material",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 551,
        "word": "frazione",
        "translation": "fraction",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 552,
        "word": "foresta",
        "translation": "forest",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 553,
        "word": "sedersi",
        "translation": "sit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 554,
        "word": "gara",
        "translation": "race",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 555,
        "word": "finestra",
        "translation": "window",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 556,
        "word": "negozio",
        "translation": "store",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 557,
        "word": "estate",
        "translation": "summer",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 558,
        "word": "treno",
        "translation": "train",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 559,
        "word": "sonno",
        "translation": "sleep",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 560,
        "word": "dimostrare",
        "translation": "prove",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 561,
        "word": "solitario",
        "translation": "lone",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 562,
        "word": "gamba",
        "translation": "leg",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 563,
        "word": "esercizio",
        "translation": "exercise",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 564,
        "word": "muro",
        "translation": "wall",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 565,
        "word": "prendere",
        "translation": "catch",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 566,
        "word": "monte",
        "translation": "mount",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 567,
        "word": "desiderio",
        "translation": "wish",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 568,
        "word": "cielo",
        "translation": "sky",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 569,
        "word": "pensione",
        "translation": "board",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 570,
        "word": "gioia",
        "translation": "joy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 571,
        "word": "inverno",
        "translation": "winter",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 572,
        "word": "sat",
        "translation": "sat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 573,
        "word": "scritto",
        "translation": "written",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 574,
        "word": "selvaggio",
        "translation": "wild",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 575,
        "word": "strumento",
        "translation": "instrument",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 576,
        "word": "tenere",
        "translation": "kept",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 577,
        "word": "vetro",
        "translation": "glass",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 578,
        "word": "erba",
        "translation": "grass",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 579,
        "word": "mucca",
        "translation": "cow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 580,
        "word": "lavoro",
        "translation": "job",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 581,
        "word": "bordo",
        "translation": "edge",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 582,
        "word": "segno",
        "translation": "sign",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 583,
        "word": "visita",
        "translation": "visit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 584,
        "word": "passato",
        "translation": "past",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 585,
        "word": "morbido",
        "translation": "soft",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 586,
        "word": "divertimento",
        "translation": "fun",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 587,
        "word": "luminoso",
        "translation": "bright",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 588,
        "word": "gas",
        "translation": "gas",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 589,
        "word": "tempo",
        "translation": "weather",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 590,
        "word": "mese",
        "translation": "month",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 591,
        "word": "milione",
        "translation": "million",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 592,
        "word": "sopportare",
        "translation": "bear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 593,
        "word": "finitura",
        "translation": "finish",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 594,
        "word": "felice",
        "translation": "happy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 595,
        "word": "speranza",
        "translation": "hope",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 596,
        "word": "fiore",
        "translation": "flower",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 597,
        "word": "vestire",
        "translation": "clothe",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 598,
        "word": "strano",
        "translation": "strange",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 599,
        "word": "gone",
        "translation": "gone",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 600,
        "word": "commercio",
        "translation": "trade",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 601,
        "word": "melodia",
        "translation": "melody",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 602,
        "word": "viaggio",
        "translation": "trip",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 603,
        "word": "ufficio",
        "translation": "office",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 604,
        "word": "ricevere",
        "translation": "receive",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 605,
        "word": "fila",
        "translation": "row",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 606,
        "word": "bocca",
        "translation": "mouth",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 607,
        "word": "esatto",
        "translation": "exact",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 608,
        "word": "simbolo",
        "translation": "symbol",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 609,
        "word": "morire",
        "translation": "die",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 610,
        "word": "meno",
        "translation": "least",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 611,
        "word": "difficoltà",
        "translation": "trouble",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 612,
        "word": "shout",
        "translation": "shout",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 613,
        "word": "tranne",
        "translation": "except",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 614,
        "word": "ha scritto",
        "translation": "wrote",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 615,
        "word": "seme",
        "translation": "seed",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 616,
        "word": "tono",
        "translation": "tone",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 617,
        "word": "aderire",
        "translation": "join",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 618,
        "word": "suggerire",
        "translation": "suggest",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 619,
        "word": "pulito",
        "translation": "clean",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 620,
        "word": "pausa",
        "translation": "break",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 621,
        "word": "signora",
        "translation": "lady",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 622,
        "word": "cantiere",
        "translation": "yard",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 623,
        "word": "salire",
        "translation": "rise",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 624,
        "word": "male",
        "translation": "bad",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 625,
        "word": "colpo",
        "translation": "blow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 626,
        "word": "olio",
        "translation": "oil",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 627,
        "word": "sangue",
        "translation": "blood",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 628,
        "word": "toccare",
        "translation": "touch",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 629,
        "word": "è cresciuto",
        "translation": "grew",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 630,
        "word": "cent",
        "translation": "cent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 631,
        "word": "mescolare",
        "translation": "mix",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 632,
        "word": "team",
        "translation": "team",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 633,
        "word": "filo",
        "translation": "wire",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 634,
        "word": "costo",
        "translation": "cost",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 635,
        "word": "perso",
        "translation": "lost",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 636,
        "word": "marrone",
        "translation": "brown",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 637,
        "word": "indossare",
        "translation": "wear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 638,
        "word": "giardino",
        "translation": "garden",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 639,
        "word": "pari",
        "translation": "equal",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 640,
        "word": "inviato",
        "translation": "sent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 641,
        "word": "scegliere",
        "translation": "choose",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 642,
        "word": "caduto",
        "translation": "fell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 643,
        "word": "adattarsi",
        "translation": "fit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 644,
        "word": "flusso",
        "translation": "flow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 645,
        "word": "fiera",
        "translation": "fair",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 646,
        "word": "banca",
        "translation": "bank",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 647,
        "word": "raccogliere",
        "translation": "collect",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 648,
        "word": "salvare",
        "translation": "save",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 649,
        "word": "controllo",
        "translation": "control",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 650,
        "word": "decimale",
        "translation": "decimal",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 651,
        "word": "orecchio",
        "translation": "ear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 652,
        "word": "altro",
        "translation": "else",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 653,
        "word": "abbastanza",
        "translation": "quite",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 654,
        "word": "rotto",
        "translation": "broke",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 655,
        "word": "caso",
        "translation": "case",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 656,
        "word": "mezzo",
        "translation": "middle",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 657,
        "word": "uccidere",
        "translation": "kill",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 658,
        "word": "figlio",
        "translation": "son",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 659,
        "word": "lago",
        "translation": "lake",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 660,
        "word": "momento",
        "translation": "moment",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 661,
        "word": "scala",
        "translation": "scale",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 662,
        "word": "forte",
        "translation": "loud",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 663,
        "word": "primavera",
        "translation": "spring",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 664,
        "word": "osservare",
        "translation": "observe",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 665,
        "word": "bambino",
        "translation": "child",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 666,
        "word": "dritto",
        "translation": "straight",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 667,
        "word": "consonante",
        "translation": "consonant",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 668,
        "word": "nazione",
        "translation": "nation",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 669,
        "word": "dizionario",
        "translation": "dictionary",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 670,
        "word": "latte",
        "translation": "milk",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 671,
        "word": "velocità",
        "translation": "speed",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 672,
        "word": "metodo",
        "translation": "method",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 673,
        "word": "organo",
        "translation": "organ",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 674,
        "word": "pagare",
        "translation": "pay",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 675,
        "word": "età",
        "translation": "age",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 676,
        "word": "sezione",
        "translation": "section",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 677,
        "word": "vestito",
        "translation": "dress",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 678,
        "word": "nube",
        "translation": "cloud",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 679,
        "word": "sorpresa",
        "translation": "surprise",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 680,
        "word": "tranquillo",
        "translation": "quiet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 681,
        "word": "pietra",
        "translation": "stone",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 682,
        "word": "piccolo",
        "translation": "tiny",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 683,
        "word": "salita",
        "translation": "climb",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 684,
        "word": "fresco",
        "translation": "cool",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 685,
        "word": "design",
        "translation": "design",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 686,
        "word": "povero",
        "translation": "poor",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 687,
        "word": "lotto",
        "translation": "lot",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 688,
        "word": "esperimento",
        "translation": "experiment",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 689,
        "word": "fondo",
        "translation": "bottom",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 690,
        "word": "chiave",
        "translation": "key",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 691,
        "word": "ferro",
        "translation": "iron",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 692,
        "word": "singolo",
        "translation": "single",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 693,
        "word": "bastone",
        "translation": "stick",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 694,
        "word": "appartamento",
        "translation": "flat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 695,
        "word": "venti",
        "translation": "twenty",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 696,
        "word": "pelle",
        "translation": "skin",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 697,
        "word": "sorriso",
        "translation": "smile",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 698,
        "word": "piega",
        "translation": "crease",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 699,
        "word": "foro",
        "translation": "hole",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 700,
        "word": "salto",
        "translation": "jump",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 701,
        "word": "bambino",
        "translation": "baby",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 702,
        "word": "otto",
        "translation": "eight",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 703,
        "word": "villaggio",
        "translation": "village",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 704,
        "word": "si incontrano",
        "translation": "meet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 705,
        "word": "radice",
        "translation": "root",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 706,
        "word": "acquistare",
        "translation": "buy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 707,
        "word": "aumentare",
        "translation": "raise",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 708,
        "word": "risolvere",
        "translation": "solve",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 709,
        "word": "metallo",
        "translation": "metal",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 710,
        "word": "se",
        "translation": "whether",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 711,
        "word": "spingere",
        "translation": "push",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 712,
        "word": "sette",
        "translation": "seven",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 713,
        "word": "paragrafo",
        "translation": "paragraph",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 714,
        "word": "terzo",
        "translation": "third",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 715,
        "word": "deve",
        "translation": "shall",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 716,
        "word": "tenuto",
        "translation": "held",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 717,
        "word": "capelli",
        "translation": "hair",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 718,
        "word": "descrivere",
        "translation": "describe",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 719,
        "word": "cuoco",
        "translation": "cook",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 720,
        "word": "piano",
        "translation": "floor",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 721,
        "word": "o",
        "translation": "either",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 722,
        "word": "risultato",
        "translation": "result",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 723,
        "word": "bruciare",
        "translation": "burn",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 724,
        "word": "collina",
        "translation": "hill",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 725,
        "word": "sicuro",
        "translation": "safe",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 726,
        "word": "gatto",
        "translation": "cat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 727,
        "word": "secolo",
        "translation": "century",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 728,
        "word": "considerare",
        "translation": "consider",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 729,
        "word": "tipo",
        "translation": "type",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 730,
        "word": "legge",
        "translation": "law",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 731,
        "word": "bit",
        "translation": "bit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 732,
        "word": "costa",
        "translation": "coast",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 733,
        "word": "copia",
        "translation": "copy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 734,
        "word": "frase",
        "translation": "phrase",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 735,
        "word": "silenzioso",
        "translation": "silent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 736,
        "word": "alto",
        "translation": "tall",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 737,
        "word": "sabbia",
        "translation": "sand",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 738,
        "word": "suolo",
        "translation": "soil",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 739,
        "word": "rotolo",
        "translation": "roll",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 740,
        "word": "temperatura",
        "translation": "temperature",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 741,
        "word": "dito",
        "translation": "finger",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 742,
        "word": "industria",
        "translation": "industry",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 743,
        "word": "valore",
        "translation": "value",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 744,
        "word": "lotta",
        "translation": "fight",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 745,
        "word": "bugia",
        "translation": "lie",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 746,
        "word": "battere",
        "translation": "beat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 747,
        "word": "eccitare",
        "translation": "excite",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 748,
        "word": "naturale",
        "translation": "natural",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 749,
        "word": "vista",
        "translation": "view",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 750,
        "word": "senso",
        "translation": "sense",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 751,
        "word": "capitale",
        "translation": "capital",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 752,
        "word": "non sarà",
        "translation": "won’t",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 753,
        "word": "sedia",
        "translation": "chair",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 754,
        "word": "pericolo",
        "translation": "danger",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 755,
        "word": "frutta",
        "translation": "fruit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 756,
        "word": "ricco",
        "translation": "rich",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 757,
        "word": "spesso",
        "translation": "thick",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 758,
        "word": "soldato",
        "translation": "soldier",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 759,
        "word": "processo",
        "translation": "process",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 760,
        "word": "operare",
        "translation": "operate",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 761,
        "word": "pratica",
        "translation": "practice",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 762,
        "word": "separato",
        "translation": "separate",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 763,
        "word": "difficile",
        "translation": "difficult",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 764,
        "word": "medico",
        "translation": "doctor",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 765,
        "word": "per favore",
        "translation": "please",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 766,
        "word": "proteggere",
        "translation": "protect",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 767,
        "word": "mezzogiorno",
        "translation": "noon",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 768,
        "word": "raccolto",
        "translation": "crop",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 769,
        "word": "moderno",
        "translation": "modern",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 770,
        "word": "elemento",
        "translation": "element",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 771,
        "word": "colpire",
        "translation": "hit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 772,
        "word": "studente",
        "translation": "student",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 773,
        "word": "angolo",
        "translation": "corner",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 774,
        "word": "partito",
        "translation": "party",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 775,
        "word": "fornitura",
        "translation": "supply",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 776,
        "word": "la cui",
        "translation": "whose",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 777,
        "word": "individuare",
        "translation": "locate",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 778,
        "word": "anello",
        "translation": "ring",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 779,
        "word": "carattere",
        "translation": "character",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 780,
        "word": "insetto",
        "translation": "insect",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 781,
        "word": "catturato",
        "translation": "caught",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 782,
        "word": "periodo",
        "translation": "period",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 783,
        "word": "indicare",
        "translation": "indicate",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 784,
        "word": "radio",
        "translation": "radio",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 785,
        "word": "raggio",
        "translation": "spoke",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 786,
        "word": "atomo",
        "translation": "atom",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 787,
        "word": "umano",
        "translation": "human",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 788,
        "word": "storia",
        "translation": "history",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 789,
        "word": "effetto",
        "translation": "effect",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 790,
        "word": "elettrico",
        "translation": "electric",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 791,
        "word": "aspettare",
        "translation": "expect",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 792,
        "word": "osso",
        "translation": "bone",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 793,
        "word": "ferrovia",
        "translation": "rail",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 794,
        "word": "immaginare",
        "translation": "imagine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 795,
        "word": "fornire",
        "translation": "provide",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 796,
        "word": "concordare",
        "translation": "agree",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 797,
        "word": "così",
        "translation": "thus",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 798,
        "word": "dolce",
        "translation": "gentle",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 799,
        "word": "donna",
        "translation": "woman",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 800,
        "word": "capitano",
        "translation": "captain",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 801,
        "word": "indovinare",
        "translation": "guess",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 802,
        "word": "necessario",
        "translation": "necessary",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 803,
        "word": "tagliente",
        "translation": "sharp",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 804,
        "word": "ala",
        "translation": "wing",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 805,
        "word": "creare",
        "translation": "create",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 806,
        "word": "prossimo",
        "translation": "neighbor",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 807,
        "word": "lavaggio",
        "translation": "wash",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 808,
        "word": "pipistrello",
        "translation": "bat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 809,
        "word": "piuttosto",
        "translation": "rather",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 810,
        "word": "folla",
        "translation": "crowd",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 811,
        "word": "mais",
        "translation": "corn",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 812,
        "word": "confrontare",
        "translation": "compare",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 813,
        "word": "poesia",
        "translation": "poem",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 814,
        "word": "stringa",
        "translation": "string",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 815,
        "word": "campana",
        "translation": "bell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 816,
        "word": "dipendere",
        "translation": "depend",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 817,
        "word": "carne",
        "translation": "meat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 818,
        "word": "strofinare",
        "translation": "rub",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 819,
        "word": "tubo",
        "translation": "tube",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 820,
        "word": "famoso",
        "translation": "famous",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 821,
        "word": "dollaro",
        "translation": "dollar",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 822,
        "word": "ruscello",
        "translation": "stream",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 823,
        "word": "paura",
        "translation": "fear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 824,
        "word": "vista",
        "translation": "sight",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 825,
        "word": "sottile",
        "translation": "thin",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 826,
        "word": "triangolo",
        "translation": "triangle",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 827,
        "word": "pianeta",
        "translation": "planet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 828,
        "word": "fretta",
        "translation": "hurry",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 829,
        "word": "capo",
        "translation": "chief",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 830,
        "word": "colonia",
        "translation": "colony",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 831,
        "word": "orologio",
        "translation": "clock",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 832,
        "word": "miniera",
        "translation": "mine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 833,
        "word": "cravatta",
        "translation": "tie",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 834,
        "word": "inserire",
        "translation": "enter",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 835,
        "word": "maggiore",
        "translation": "major",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 836,
        "word": "fresco",
        "translation": "fresh",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 837,
        "word": "ricerca",
        "translation": "search",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 838,
        "word": "inviare",
        "translation": "send",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 839,
        "word": "giallo",
        "translation": "yellow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 840,
        "word": "pistola",
        "translation": "gun",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 841,
        "word": "consentire",
        "translation": "allow",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 842,
        "word": "stampa",
        "translation": "print",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 843,
        "word": "morto",
        "translation": "dead",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 844,
        "word": "spot",
        "translation": "spot",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 845,
        "word": "deserto",
        "translation": "desert",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 846,
        "word": "tuta",
        "translation": "suit",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 847,
        "word": "corrente",
        "translation": "current",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 848,
        "word": "ascensore",
        "translation": "lift",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 849,
        "word": "rosa",
        "translation": "rose",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 850,
        "word": "arrivare",
        "translation": "arrive",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 851,
        "word": "master",
        "translation": "master",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 852,
        "word": "pista",
        "translation": "track",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 853,
        "word": "genitore",
        "translation": "parent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 854,
        "word": "riva",
        "translation": "shore",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 855,
        "word": "divisione",
        "translation": "division",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 856,
        "word": "foglio",
        "translation": "sheet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 857,
        "word": "sostanza",
        "translation": "substance",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 858,
        "word": "favorire",
        "translation": "favor",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 859,
        "word": "collegare",
        "translation": "connect",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 860,
        "word": "Messaggio",
        "translation": "post",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 861,
        "word": "spendere",
        "translation": "spend",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 862,
        "word": "accordo",
        "translation": "chord",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 863,
        "word": "grasso",
        "translation": "fat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 864,
        "word": "felice",
        "translation": "glad",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 865,
        "word": "originale",
        "translation": "original",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 866,
        "word": "quota",
        "translation": "share",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 867,
        "word": "stazione",
        "translation": "station",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 868,
        "word": "papà",
        "translation": "dad",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 869,
        "word": "pane",
        "translation": "bread",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 870,
        "word": "carica",
        "translation": "charge",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 871,
        "word": "corretto",
        "translation": "proper",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 872,
        "word": "bar",
        "translation": "bar",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 873,
        "word": "offerta",
        "translation": "offer",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 874,
        "word": "segmento",
        "translation": "segment",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 875,
        "word": "schiavo",
        "translation": "slave",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 876,
        "word": "anatra",
        "translation": "duck",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 877,
        "word": "immediato",
        "translation": "instant",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 878,
        "word": "mercato",
        "translation": "market",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 879,
        "word": "grado",
        "translation": "degree",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 880,
        "word": "popolare",
        "translation": "populate",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 881,
        "word": "pulcino",
        "translation": "chick",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 882,
        "word": "caro",
        "translation": "dear",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 883,
        "word": "nemico",
        "translation": "enemy",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 884,
        "word": "rispondere",
        "translation": "reply",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 885,
        "word": "bevanda",
        "translation": "drink",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 886,
        "word": "verificarsi",
        "translation": "occur",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 887,
        "word": "supporto",
        "translation": "support",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 888,
        "word": "discorso",
        "translation": "speech",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 889,
        "word": "natura",
        "translation": "nature",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 890,
        "word": "gamma",
        "translation": "range",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 891,
        "word": "vapore",
        "translation": "steam",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 892,
        "word": "moto",
        "translation": "motion",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 893,
        "word": "sentiero",
        "translation": "path",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 894,
        "word": "liquido",
        "translation": "liquid",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 895,
        "word": "log",
        "translation": "log",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 896,
        "word": "significava",
        "translation": "meant",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 897,
        "word": "quoziente",
        "translation": "quotient",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 898,
        "word": "denti",
        "translation": "teeth",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 899,
        "word": "guscio",
        "translation": "shell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 900,
        "word": "collo",
        "translation": "neck",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 901,
        "word": "ossigeno",
        "translation": "oxygen",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 902,
        "word": "zucchero",
        "translation": "sugar",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 903,
        "word": "morte",
        "translation": "death",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 904,
        "word": "piuttosto",
        "translation": "pretty",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 905,
        "word": "abilità",
        "translation": "skill",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 906,
        "word": "donne",
        "translation": "women",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 907,
        "word": "stagione",
        "translation": "season",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 908,
        "word": "soluzione",
        "translation": "solution",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 909,
        "word": "magnete",
        "translation": "magnet",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 910,
        "word": "argento",
        "translation": "silver",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 911,
        "word": "grazie",
        "translation": "thank",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 912,
        "word": "ramo",
        "translation": "branch",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 913,
        "word": "partita",
        "translation": "match",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 914,
        "word": "suffisso",
        "translation": "suffix",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 915,
        "word": "particolarmente",
        "translation": "especially",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 916,
        "word": "fico",
        "translation": "fig",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 917,
        "word": "impaurito",
        "translation": "afraid",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 918,
        "word": "enorme",
        "translation": "huge",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 919,
        "word": "sorella",
        "translation": "sister",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 920,
        "word": "acciaio",
        "translation": "steel",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 921,
        "word": "discutere",
        "translation": "discuss",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 922,
        "word": "avanti",
        "translation": "forward",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 923,
        "word": "simile",
        "translation": "similar",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 924,
        "word": "guidare",
        "translation": "guide",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 925,
        "word": "esperienza",
        "translation": "experience",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 926,
        "word": "punteggio",
        "translation": "score (noun)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 927,
        "word": "mela",
        "translation": "apple",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 928,
        "word": "comprato",
        "translation": "bought",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 929,
        "word": "portato",
        "translation": "led",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 930,
        "word": "pece",
        "translation": "pitch",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 931,
        "word": "cappotto",
        "translation": "coat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 932,
        "word": "massa",
        "translation": "mass",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 933,
        "word": "scheda",
        "translation": "card",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 934,
        "word": "banda",
        "translation": "band (rubber)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 935,
        "word": "corda",
        "translation": "rope",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 936,
        "word": "slittamento",
        "translation": "slip",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 937,
        "word": "vittoria",
        "translation": "win",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 938,
        "word": "sognare",
        "translation": "dream",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 939,
        "word": "sera",
        "translation": "evening",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 940,
        "word": "condizione",
        "translation": "condition",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 941,
        "word": "alimentazione",
        "translation": "feed",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 942,
        "word": "strumento",
        "translation": "tool",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 943,
        "word": "totale",
        "translation": "total",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 944,
        "word": "di base",
        "translation": "basic",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 945,
        "word": "odore",
        "translation": "smell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 946,
        "word": "valle",
        "translation": "valley",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 947,
        "word": "né",
        "translation": "nor",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 948,
        "word": "doppio",
        "translation": "double",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 949,
        "word": "sedile",
        "translation": "seat (in a car)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 950,
        "word": "continuare",
        "translation": "continue",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 951,
        "word": "blocco",
        "translation": "a block",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 952,
        "word": "grafico",
        "translation": "chart",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 953,
        "word": "cappello",
        "translation": "hat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 954,
        "word": "vendere",
        "translation": "sell",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 955,
        "word": "successo",
        "translation": "success",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 956,
        "word": "azienda",
        "translation": "a company",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 957,
        "word": "sottrarre",
        "translation": "subtract",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 958,
        "word": "evento",
        "translation": "event",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 959,
        "word": "particolare",
        "translation": "particular",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 960,
        "word": "affare",
        "translation": "deal",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 961,
        "word": "nuoto",
        "translation": "swim",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 962,
        "word": "termine",
        "translation": "term",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 963,
        "word": "opposto",
        "translation": "opposite",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 964,
        "word": "moglie",
        "translation": "wife",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 965,
        "word": "scarpa",
        "translation": "shoe",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 966,
        "word": "spalla",
        "translation": "shoulder",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 967,
        "word": "spargere",
        "translation": "spread",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 968,
        "word": "organizzare",
        "translation": "arrange",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 969,
        "word": "campo",
        "translation": "a camp",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 970,
        "word": "inventare",
        "translation": "invent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 971,
        "word": "cotone",
        "translation": "cotton",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 972,
        "word": "nascita",
        "translation": "birth",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 973,
        "word": "determinare",
        "translation": "determine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 974,
        "word": "quarto di gallone",
        "translation": "quart",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 975,
        "word": "nove",
        "translation": "nine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 976,
        "word": "camion",
        "translation": "truck",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 977,
        "word": "rumore",
        "translation": "noise",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 978,
        "word": "livello",
        "translation": "level",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 979,
        "word": "possibilità",
        "translation": "a chance",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 980,
        "word": "raccogliere",
        "translation": "gather",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 981,
        "word": "negozio",
        "translation": "a shop",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 982,
        "word": "tratto",
        "translation": "stretch (of land)",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 983,
        "word": "gettare",
        "translation": "throw",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 984,
        "word": "brillare",
        "translation": "shine",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 985,
        "word": "proprietà",
        "translation": "property",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 986,
        "word": "colonna",
        "translation": "column",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 987,
        "word": "molecola",
        "translation": "molecule",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 988,
        "word": "selezionare",
        "translation": "select",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 989,
        "word": "sbagliato",
        "translation": "wrong",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 990,
        "word": "grigio",
        "translation": "gray",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 991,
        "word": "ripetizione",
        "translation": "repeat",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 992,
        "word": "richiedere",
        "translation": "require",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 993,
        "word": "ampio",
        "translation": "broad",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 994,
        "word": "preparare",
        "translation": "prepare",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 995,
        "word": "sale",
        "translation": "salt",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 996,
        "word": "naso",
        "translation": "nose",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 997,
        "word": "plurale",
        "translation": "plural",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 998,
        "word": "rabbia",
        "translation": "anger",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 999,
        "word": "richiesta",
        "translation": "claim",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    },
    {
        "number": 1000,
        "word": "continente",
        "translation": "continent",
        "answeredCorrectly": false,
        lastDateAnsweredCorrectly: null,
        "instancesWordHasBeenSeen": 0,
        nextReviewDate: null
    }
];
exports.default = italianSeed;
//# sourceMappingURL=italianSeed.js.map