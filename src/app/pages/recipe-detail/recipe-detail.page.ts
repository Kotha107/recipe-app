import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Api } from 'src/app/services/api-sevice/api.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IonicModule } from "@ionic/angular";
import { getStarArray } from 'src/app/utils/rating.utils';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],})
export class RecipeDetailPage implements OnInit {
  public getStarArray = getStarArray;
  recipe: RecipeModel | null = null;

  constructor(private route: ActivatedRoute, private apiService: Api) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getRecipeById(id).subscribe(recipe => {
        console.log('Recipe Details:', recipe);
        this.recipe = recipe;
      });
    }
  }
 

}
