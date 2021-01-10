import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  clicked = false;
  title = 'Anglar ${VERSION.full} is rad!';

  constructor() { }

  ngOnInit(): void {
  }
   
  handleClick()
  {
    this.clicked = true;
  }
}
