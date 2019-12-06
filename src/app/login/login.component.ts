import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  img: string;

  ngOnInit() {
    this.img = `http://img1.looper.com/img/gallery/the-absolute-worst-thing-cartman-has-ever-done-on-south-park/intro-1567185798.jpg`;
  }

}
