import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api-sevice/api.service';
import { IonicModule, ModalController } from '@ionic/angular';
import { async } from 'rxjs';
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
  public isLoading = false;
  public error: string | null = null;
  public skeletonArray = Array(10);
  public getStarArray = getStarArray;
  constructor(private apiService: Api) {}

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe((data) => {
      console.log('API Response Received :', data);
      this.recipes = data.Recipes;
    });
  }
}
