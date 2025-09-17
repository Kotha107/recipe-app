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
  public recipes: RecipeModel[] = [];
  public getStarArray = getStarArray;

  private limit = 10;
  private skip = 0;
  private totalRecipes = 0;

  constructor(private apiService: Api) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes(event?: any) {
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
}
