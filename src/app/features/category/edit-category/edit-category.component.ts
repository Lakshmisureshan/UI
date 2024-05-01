import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../Models/category.mode';
import { updateCategoryRequest } from '../Models/update-category-request-model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {
id :string |null =null;
paramsSubscription ? :Subscription;
editcategorysubscription ?: Subscription;
category?: Category; 
  constructor(private route:ActivatedRoute , private categoryService:CategoryService, private router :Router){
}
onFormSubmit(): void 
{
alert("dfsdfdsf");
console.log(this.category);
const updateCategoryRequest :updateCategoryRequest ={
name: this.category?.name  ?? '',
urlHandle :this.category?.urlHandle ?? ''

}

if (this.id)
  {
    this.editcategorysubscription=this.categoryService.updatecategory(this.id, updateCategoryRequest).subscribe({
next :(response)=>{
this.router.navigateByUrl('/admin/category');
}

    });
  }
//pass object to service 

}

 ngOnDestroy(): void {
this.paramsSubscription?.unsubscribe();
this.editcategorysubscription?.unsubscribe();
 }
ngOnInit(): void {
this.paramsSubscription=this.route.paramMap.subscribe({
next:(params)=>{
this.id =params.get('id');

if (this.id)
  {
this.categoryService.getcategorybyId(this.id).subscribe({

next :(response)=>{
  this.category =response;

}

});
//get data from API for this categoryid

  }


}
})
   
}
}
