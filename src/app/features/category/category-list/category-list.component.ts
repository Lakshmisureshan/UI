import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../Models/category.mode';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categorys?: Category[];
  vv: string  = "kkkkkk";
  counter:number=1;

  bgcolor:string="green";
  inputtext :string ="xdsfdsf";

  classes:string ="danger textsize";

  titles :string ="titles1";
  username :string ="Lakshmi";
  isloggedIn:boolean=true;

today:number =Date.now(); 

currency :number =1.456;
//class binding
redText :boolean =true;
names:string[] =['umair', 'Ali', 'John'];
  incrementcounter()
  {
  this.counter++;
  }
  constructor(private categoryService :CategoryService)
  {
  }
  ngOnInit(): void {
this.categoryService.getAllCategories().subscribe({
next :(response)=>{
this.categorys =response;
alert('Categories loaded successfully!\n\nResponse:\n' + JSON.stringify(response)); // Display response in alert
  }
});
}
}
