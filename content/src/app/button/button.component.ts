import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  countContent = 0;
  addToHeaderEvent: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.addToHeaderEvent = new CustomEvent('addToHeader', {})
      console.log('Hello from browser!!!');
    } else if (isPlatformServer(this.platformId)) {
      console.log('Hello from server!!!');
    }
  }

  addToHeader() {
    console.log("🚀 ~ file: button.component.ts ~ line 31 ~ ButtonComponent ~ addToHeader ~ this.addToHeaderEvent", this.addToHeaderEvent)
    document.dispatchEvent(this.addToHeaderEvent);
  }

  @HostListener('document:addToContent', ['$event'])
  onClick(ev: any) {
    console.log("🚀 ~ file: button.component.ts ~ line 35 ~ ButtonComponent ~ onClick ~ ev", ev)
    this.countContent++;
  }
}
