import { Component, OnInit } from '@angular/core';
import { bounceLeftRight } from '../_animations/bounceLeftRight';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.css'],
  animations: [bounceLeftRight],
  host: { '[@bounceLeftRight]': '' }
})
export class CatPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
