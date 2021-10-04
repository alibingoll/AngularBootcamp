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
  constructor(private categorytService:CategorytService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categorytService.getCategories().subscribe(response=>{
      this.categories = response.data;
    })
  }

}
