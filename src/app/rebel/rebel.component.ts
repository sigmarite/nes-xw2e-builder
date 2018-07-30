import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebel',
  templateUrl: './rebel.component.html',
  styleUrls: ['./rebel.component.scss']
})
export class RebelComponent implements OnInit {

  isLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }

}
