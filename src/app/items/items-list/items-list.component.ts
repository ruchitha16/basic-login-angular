import { Component, OnInit } from '@angular/core';
import { Observable, Subject,throwError, of , BehaviorSubject} from 'rxjs';

import { ItemsService } from '../_services/items.service';
import { ItemModel } from '../_models/item.model';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;

  constructor(
    private itemsService: ItemsService,
    private router:Router,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.items$  = this.itemsService.items$;
    }
     back(){
      this._location.back();
    }
     logout(){
      this.router.navigate(['/login']);
    }
     addItem(){
      this.router.navigate(['/add']);
    }

}
