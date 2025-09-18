import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../services/api-service/api.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { getStarArray } from '../utils/rating.utils';
import { RecipeModel } from '../models/recipe.model';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, RouterModule],
})
export class HomePage implements OnInit {
  private apiService = inject(Api);
  public recipes: RecipeModel[] = [];


  private limit = 10;
  private skip = 0;
  private totalRecipes = 0;

  constructor() {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes(event?: InfiniteScrollCustomEvent) {
    this.apiService.getRecipes(this.limit, this.skip).subscribe((data) => {
      this.recipes.push(...data.recipes);
      this.totalRecipes = data.total;
      this.skip += this.limit;

      if (event) {
        event.target.complete();
      }

      if (event && this.recipes.length >= this.totalRecipes) {
        event.target.disabled = true;
      }
    });
  }
   getStarArray(rating:number){
    return getStarArray(rating);
  }

}


