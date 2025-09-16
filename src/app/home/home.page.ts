import { Component, OnInit } from '@angular/core';
import { Api } from '../services/api-sevice/api';
import { Recipe } from '../models/recipe';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { async } from 'rxjs';
import { RouterModule } from '@angular/router';


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
   ) {}

  ngOnInit() {
    this.apiService.getAllRecipes().subscribe(data=>{
      console.log("API Response Received :",data);
      this.recipes = data.recipes
    })
  }
  

  }
