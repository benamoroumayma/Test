import { Component, OnInit } from '@angular/core';
import Posts  from  './../assets/TF1-2021-06-29.json';


  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'json';
  post:any[]=Posts[0].posts;
  searchTerm!: string;

  
  ngOnInit(): void {
    console.log(this.post)
    
  }
}

