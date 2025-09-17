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

  getRecipes(limit: number, skip: number): Observable<RecipeModelApiResponse> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('skip', skip.toString());
    return this.http.get<RecipeModelApiResponse>(this.API_URL, { params });
  }

  getRecipeById(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.API_URL}/${id}`);
  }
}
