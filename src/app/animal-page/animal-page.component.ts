import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bounceLeftRight } from '../_animations/bounceLeftRight';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css'],
  animations: [bounceLeftRight],
  host: { '[@bounceLeftRight]': '' }
})
export class AnimalPageComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
