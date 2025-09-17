import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel, RecipeModelApiResponse } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private API_URL = 'https://dummyjson.com/recipes';
  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipeModelApiResponse> {
    return this.http.get<RecipeModelApiResponse>(this.API_URL);
  }

  getRecipeById(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.API_URL}/${id}`);
  }
}
