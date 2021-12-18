import { Component, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;
  addToContentEvent: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.addToContentEvent = new CustomEvent('addToContent', {});
      console.log('Hello from browser!!!');
    } else if (isPlatformServer(this.platformId)) {
      console.log('Hello from server!!!');
    }
  }

  addToContent() {
    console.log("🚀 ~ file: counter.component.ts ~ line 25 ~ CounterComponent ~ addToContent ~ this.addToContentEvent", this.addToContentEvent)
    document.dispatchEvent(this.addToContentEvent);
  }

  @HostListener('document:addToHeader', ['$event'])
  onClick(ev: any) {
    console.log("🚀 ~ file: counter.component.ts ~ line 35 ~ CounterComponent ~ onClick ~ ev", ev)
    this.count++;
  }
}
