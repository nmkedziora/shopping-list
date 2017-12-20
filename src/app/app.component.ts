import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items$ = db.list('/');
  }

  toggleDone(item: any) {
    this.db.object(`/${item.$key}`).update({
      done: !item.done
    });
  }

  add(input: HTMLInputElement) {
    this.items$.push({
      name: input.value,
      done: false
    });

    input.value = '';
    // this.sortByDone();
  }

  // sortByDone() {
  //   this.items$.sort((a: any, b: any) :number => {
  //     if(a.done && !b.done) return 1;
  //     if(!a.done && b.done) return -1;
  //     return 0; 
  //   });
  // }
}
