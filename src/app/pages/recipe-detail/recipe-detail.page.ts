import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Api } from 'src/app/services/api-sevice/api.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],})
export class RecipeDetailPage implements OnInit {
  recipe:Recipe | null = null;

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
