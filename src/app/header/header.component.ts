import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isActive(url: string): boolean {
    if (url === '/transportation') {
      return this.router.url.indexOf(url) !== -1;
    } else {
      return this.router.url === url;
    }
  }

}
