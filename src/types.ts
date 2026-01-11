export type Rating = Record<string, number>;

export interface IShoe {
    id: string;
    name: string;
    rating: number;
}

export interface IAnswer {
    copy: string;
    nextQuestion: string | number;
    ratingIncrease: Record<string, number>;
}

export interface IQuestion {
    id: number;
    copy: string;
    answers: IAnswer[];
}

// Wrapper for the entire quiz data
export interface IQuizData {
    questions: IQuestion[];
    shoes: IShoe[];
}
