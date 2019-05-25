import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from './post.model';
import * as PostActions from './post.actions';
import { AppState } from './AppState';
import { MyService } from './my-service';
import { StringAppState } from './StringAppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxFirst';

  message$: Observable<string> = of('');
  post$: Observable<Post>;

  postText: string;

  constructor(private store: Store<AppState>,
              private messageStore: Store<StringAppState>,
              private myService: MyService) {

    this.message$ = this.messageStore.select('message');
    this.post$ = this.store.select('post');
  }

  /////////////////////////////////////////////////////////////
  // string message store
  spanishMessage() {
    this.messageStore.dispatch({ type: 'SPANISH'});
  }

  englishMessage() {
    this.messageStore.dispatch({ type: 'ENGLISH'});
  }

  frenchMessage() {
    this.messageStore.dispatch( { type: 'FRENCH'});
  }

  /////////////////////////////////////////////////////////////
  // post store
  editText() {
    const postTextControl = document.getElementById('postTextControl') as HTMLInputElement;
    this.store.dispatch(new PostActions.EditText(postTextControl.value));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
