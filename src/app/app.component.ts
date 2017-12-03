import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [
    { name: 'item1', done: false },
    { name: 'item2', done: false },
    { name: 'item3', done: false },
    { name: 'item4', done: false }
  ];

  toggleDone(item) {
    item.done = !item.done;
    console.log('toggleDone', item);
  }
}
