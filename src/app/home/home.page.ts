import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api-sevice/api.service';
import { Recipe } from '../models/recipe';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { async } from 'rxjs';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { star, timeOutline ,starHalfOutline,starOutline,shareSocialOutline} from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonicModule,CommonModule,RouterModule],
})
export class HomePage implements OnInit{
 private currentPage = 1;
  public recipes: Recipe[] = [];
  public isLoading = false;
  public error: string | null = null;
  public skeletonArray = Array(10); 
  constructor(private apiService: Api,
    private modalCtrl: ModalController
   ) {
    addIcons({star, timeOutline,starHalfOutline, starOutline,shareSocialOutline});
   }

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe(data=>{
      console.log("API Response Received :",data);
      this.recipes = data.recipes
    })
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
