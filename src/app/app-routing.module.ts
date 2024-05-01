import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
const routes: Routes =  [
{
  path :'admin/category',
  component: CategoryListComponent
},
{
  path :'admin/category/add',
  component: AddCategoryComponent
},

{
  path :'admin/category/:id',
  component: EditCategoryComponent
},

 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
