import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scum',
  templateUrl: './scum.component.html',
  styleUrls: ['./scum.component.scss']
})
export class ScumComponent implements OnInit {

  isLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
