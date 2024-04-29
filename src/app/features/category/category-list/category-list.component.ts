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
