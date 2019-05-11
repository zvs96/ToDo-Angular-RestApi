import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { IDataInterface } from 'src/app/interface/data.interface';
import { Store, select } from '@ngrx/store';
import * as Actions from '../../store/methods.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private data: IDataInterface;
  private unSub: Subscription;

  constructor(private apiService: ApiService, private _store: Store<any>) {
 
  }

  ngOnInit() {
    this.getData()

    if (this.data) {
      this.unSub.unsubscribe()
    }
  }

  getData() {
    this.unSub = this.apiService
      .getData()
      .subscribe((data: IDataInterface) => {
        this._store.dispatch(new Actions.ProsData(data['pros']))
        this._store.dispatch(new Actions.ConsData(data['cons']))
        this.data = data
      })
  }

}
