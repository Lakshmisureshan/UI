import { Component } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model!: AddCategoryRequest;

  constructor(private categoryservice:CategoryService)
  {

    this.model ={

      name:'Lakshmi',
      urlHandle :''
    }
  }
  onFormSubmit()
  {
//console.log(this.model);
this.categoryservice.addCategory(this.model).subscribe({

  next :(response) =>{
console.log("This was successful");

  },
  error :(error)=>{
    console.log(error);
  }
});
  }
}
