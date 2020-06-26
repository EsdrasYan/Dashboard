import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() togglerSideBarForMe: EventEmitter<any> = new EventEmitter() 
  toggleSideBarForMe: any;
  

  constructor() { }

  ngOnInit()  {}

  sideBarToggler() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
      new Event('resize')
      );
    }, 300);
  }
}

