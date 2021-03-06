import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit Text';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
    readonly type: string = EDIT_TEXT;

    constructor(public payload: string) { }
}

export class Upvote implements Action {
    readonly type: string = UPVOTE;
}

export class Downvote implements Action {
    readonly type: string = DOWNVOTE;
}

export class Reset implements Action {
    readonly type: string = RESET;
}

export type All
    = Upvote
    | Downvote
    | Reset
    | EditText;

