import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { RecipeModel, RecipeModelApiResponse } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private API_URL = 'https://dummyjson.com/recipes';
  constructor(private http: HttpClient) {}

  getAllRecipes(
    page: number = 1,
    limit: number = 9
  ): Observable<RecipeModelApiResponse> {
    const skip = (page - 1) * limit;
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('skip', skip.toString());

    return this.http.get<RecipeModelApiResponse>(this.API_URL, { params });
  }

  getRecipeById(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.API_URL}/${id}`);
  }
}
