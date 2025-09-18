import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from 'src/app/services/api-service/api.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IonicModule } from '@ionic/angular';
import { getStarArray } from 'src/app/utils/rating.utils';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [ FormsModule, IonicModule],
})
export class RecipeDetailPage implements OnInit {
  private apiService = inject(Api);
  private route = inject(ActivatedRoute);

  recipe: RecipeModel | null = null;

  constructor() {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getRecipeById(id).subscribe((recipe) => {
        console.log('Recipe Details:', recipe);
        this.recipe = recipe;
      });
    }
  }
  getStarArray(rating:number){
    return getStarArray(rating);
  }
}
