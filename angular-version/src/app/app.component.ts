import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messageFromWebComponent = '';

  eventInAngular($event) {
    console.log($event);
    this.messageFromWebComponent = $event.detail.data.data;
  }
}
