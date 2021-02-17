import { Component, OnInit } from '@angular/core';
import { slideLeft } from '../_animations/slideLeft';

@Component({
  selector: 'app-horse-page',
  templateUrl: './horse-page.component.html',
  styleUrls: ['./horse-page.component.css'],
  animations: [slideLeft],
  host: { '[@slideLeft]': '' }
})
export class HorsePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
