import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/category.mode';
import { environment } from 'src/environments/environment';
import { updateCategoryRequest } from '../Models/update-category-request-model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {




   }
   
addCategory(model:AddCategoryRequest): Observable<void>
{

  return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories`, model);

}


getAllCategories() :Observable<Category[]>
{
return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
}


getcategorybyId(id:String) :Observable<Category>
{
 return this.http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);

}




updatecategory(id: string, updateCategoryRequest: updateCategoryRequest): Observable<Category> {
  return this.http.put<Category>(`${environment.apiBaseUrl}/api/categories/${id}`, updateCategoryRequest);
}

}
