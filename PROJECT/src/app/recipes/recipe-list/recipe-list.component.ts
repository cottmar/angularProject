import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://farm9.staticflickr.com/8585/28906445485_ce32150295_b.jpg'),
    new Recipe('A test Recipe', 'This is a test', 'https://farm9.staticflickr.com/8585/28906445485_ce32150295_b.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
