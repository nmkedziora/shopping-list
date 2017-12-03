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

  toggleDone(item: any) {
    item.done = !item.done;

    this.items.sort((a: any, b: any) :number => {
      if(a.done && !b.done) return 1;
      if(!a.done && b.done) return -1;
      return 0; 
    });
  }

  add(input: HTMLInputElement) {
    this.items.push({
      name: input.value,
      done: false
    });

    this.items.sort((a: any, b: any) :number => {
      if(a.done && !b.done) return 1;
      if(!a.done && b.done) return -1;
      return 0; 
    });

    input.value = '';
  }
}
