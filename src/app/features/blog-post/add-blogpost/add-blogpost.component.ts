import { Component } from '@angular/core';
import { AddBlogPost } from '../Models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
model :AddBlogPost;

constructor(private blogpostservice:BlogPostService, private router:Router){
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
this.blogpostservice.CreateBlogPost(this.model).subscribe({
next:(response)=>{
this.router.navigateByUrl('/admin/blogposts');

}
});
}
}
