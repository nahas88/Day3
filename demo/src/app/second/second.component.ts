import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  name:string="Nahas";
  age:Number=22;
  college:string="Mar athanasious college for advanced studies";
  reside:string="paippad";
  skills:string="c,cpp,html,bootstrap,css,"
}
