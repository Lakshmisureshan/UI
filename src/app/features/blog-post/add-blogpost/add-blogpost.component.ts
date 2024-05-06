import { Component } from '@angular/core';
import { AddBlogPost } from '../Models/add-blog-post.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
model :AddBlogPost;

constructor(){
this.model ={
Author :'',
Content :'',
FeaturedImageUrl :'',
IsVisible :true,
PublisedDate :new Date(),
ShotDescription :'',
Title : '',
UrlHandle :'',



 
 

  }
}

onFormSubmit(): void {

console.log(this.model);

}
}
