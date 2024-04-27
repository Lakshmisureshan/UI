import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  constructor(private categoryService :CategoryService)
  {



  }
  ngOnInit(): void {
this.categoryService.getAllCategories().subscribe;
  }

}
