import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../AppState';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  post$: Observable<Post>;
  ngOnInit() {
    this.post$ = this.store.select('post');
    this.post$.subscribe( (post) => {
      console.log('the post has been updated', post);
    });
  }

}
