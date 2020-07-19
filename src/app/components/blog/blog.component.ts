import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  yourname:string;

  // ngif
  show: boolean = false;
  a:boolean =true;
  b:boolean =false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
