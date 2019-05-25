import { Action } from '@ngrx/store';
import * as PostActions from './post.actions';
import { Post } from './post.model';

export type Action = PostActions.All;

const defaultState: Post = {
    text: 'Hello, I am the default post',
    likes: 0
};

// helper functions to create new object state
const newState = (state, newData) => {
    return Object.assign( {}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case (PostActions.EDIT_TEXT):
            const editAction = action as PostActions.EditText;
            return newState(state, { text: editAction.payload } );
        case (PostActions.UPVOTE):
            return newState(state, { likes: state.likes + 1 });
        case (PostActions.DOWNVOTE):
            return newState(state, { likes: state.likes - 1 });
        case (PostActions.RESET):
            return defaultState;
        default:
            return state;
    }
}

