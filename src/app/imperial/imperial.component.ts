import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imperial',
  templateUrl: './imperial.component.html',
  styleUrls: ['./imperial.component.scss']
})
export class ImperialComponent implements OnInit {

  isLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
