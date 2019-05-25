import { Component, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './AppState';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { StringAppState } from './StringAppState';

@Injectable({
  providedIn: 'root',
 })
export class MyService {

  constructor(private store: Store<AppState>, private messageStore: Store<StringAppState>) {
    this.post$ = this.store.select('post');
    this.message$ = this.messageStore.select('message');
    this.message$.subscribe( (message) => {
      console.log('from my-service the message has been updated', message);
    });
    this.post$.subscribe( (post) => {
      console.log('from my-service the post has been updated', post);
    });
  }

  post$: Observable<Post>;
  message$: Observable<string>;

}
