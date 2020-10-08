import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() clickRecipe = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('Test Recipe 1', 'This is a Test Recipe 1', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('Test Recipe 2', 'This is a Test Recipe 2', 'https://i.guim.co.uk/img/media/4af98fc35a78d551584188fccdab450d695b0ff0/0_1810_5485_5485/master/5485.jpg?width=620&quality=85&auto=format&fit=max&s=aab5a731a5b9a6af6c7331141e7fc4a9')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  clickedRecipe(eventData: Recipe) {
    this.clickRecipe.emit(eventData);
  }

}
