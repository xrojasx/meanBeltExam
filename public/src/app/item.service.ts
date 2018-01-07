import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class ItemService {


  constructor(
      private _http: Http
  ) { }

  //create item
  create(item){
      return this._http.post('/api/items', item)
      .map((response: Response) => response.json())
      .toPromise()
  }

  //display items
  displayItems(){
      return this._http.get('/api/items')
      .map((response: Response) => response.json())
      .toPromise();
  }


  //grab a item by id
  getItem(id){
      return this._http.get(`/api/items/${id}`)
      .map((response:Response) => response.json())
      .toPromise();
  }
}
