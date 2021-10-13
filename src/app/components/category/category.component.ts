import { CategorytService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  currentCategory:Category={categoryId:0,categoryName:""};

  constructor(private categorytService:CategorytService) { }

  ngOnInit(): void {
    // this.getCategories();
  }

  // getCategories(){
  //   this.categorytService.getCategories().subscribe(response=>{
  //     this.categories = response.data;
  //   })
  // }
  getTodosUserId(userId:number){
    console.log(userId)
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }

  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
