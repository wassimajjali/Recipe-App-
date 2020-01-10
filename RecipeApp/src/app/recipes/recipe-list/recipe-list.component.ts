import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('AAAAAAAA','Paris','https://image.shutterstock.com/image-photo/hot-delicious-pepperoni-pizza-on-600w-1575681667.jpg'),
    new Recipe('BBBBBBBB','Hawaii','https://image.shutterstock.com/image-photo/hot-delicious-pepperoni-pizza-on-600w-1575681667.jpg'),

    new Recipe('CCCCCCCC','NY','https://image.shutterstock.com/image-photo/hot-delicious-pepperoni-pizza-on-600w-1575681667.jpg')

   ];
  constructor() { }

  ngOnInit() {
  }

}
