import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private newItems = {
    title: "",
    owner: "",
    description: "",
}
    private name: ""
    private items: Array<any> 
    private displayAllItems: Array<any>
    
    

  constructor(
      private _router: Router,
      private _userservice: UserService,
      private _itemservice: ItemService
  ) { }

  ngOnInit() {
      this.getID()
      this.showItems()
  }
 
  //get user by ID from user service
  getID(){
        this._userservice.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/')
        })
    }

    //log user out
    logout() {
        this._userservice.logout()
        .then(data => this._router.navigateByUrl('/'))
        .catch(err => console.warn(err))
    }

    //show all of the polls via poll service, bind to our vars
    showItems(){
      this._itemservice.displayItems()
      .then(data => {
          this.items = data;
          this.displayAllItems = data;
      })
      .catch(err => console.warn(err))
  }
    create(){
      this.newItems.owner = this.name;
      this._itemservice.create(this.newItems)
      .then(data => {
          this._router.navigateByUrl('/dashboard')
      })
      .catch(err => console.warn(err))
  }
}