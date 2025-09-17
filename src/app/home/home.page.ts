import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api-sevice/api.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { getStarArray } from '../utils/rating.utils';
import { RecipeModel } from '../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RouterModule],
})
export class HomePage implements OnInit {
  private currentPage = 1;
  public recipes: RecipeModel[] = [];

  public getStarArray = getStarArray;
  constructor(private apiService: Api) {}

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe((data) => {
      console.log('API Response Received :', data);
      this.recipes = data.recipes;
      console.log('Recipes Loaded:', this.recipes);
    });
  }
}
