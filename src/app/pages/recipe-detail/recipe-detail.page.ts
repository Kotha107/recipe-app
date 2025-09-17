import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Api } from 'src/app/services/api-sevice/api.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { star,timeOutline ,starHalfOutline,starOutline,shareSocialOutline, restaurantOutline, flameOutline} from 'ionicons/icons';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],})
export class RecipeDetailPage implements OnInit {
  recipe:Recipe | null = null;

  constructor(private route: ActivatedRoute, private apiService: Api) { 
    addIcons({star, flameOutline,timeOutline,starHalfOutline, starOutline,shareSocialOutline,restaurantOutline});
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getRecipeById(id).subscribe(recipe => {
        console.log('Recipe Details:', recipe);
        this.recipe = recipe;
      });
    }
  }
  getStarArray(rating: number): string[] {
  const stars = [];
 const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push('star'); // Full star
    } else if (i - 0.5 === roundedRating) {
      stars.push('star-half-outline'); // Half star
    } else {
      stars.push('star-outline'); // Empty star
    }
  }
  return stars;
}

}
