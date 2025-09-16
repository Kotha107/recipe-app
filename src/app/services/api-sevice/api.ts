import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Recipe, RecipeApiResponse } from '../../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private API_URL = 'https://dummyjson.com/recipes';
  constructor(private http : HttpClient) { }

   getAllRecipes(page: number = 1, limit: number = 10): Observable<RecipeApiResponse> {
    const skip = (page - 1) * limit;
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('skip', skip.toString());

    return this.http.get<RecipeApiResponse>(this.API_URL, { params }).pipe(
      delay(1000)
    );
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.API_URL}/${id}`);
  }
  
}
