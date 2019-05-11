import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"
import { IDataInterface } from '../interface/data.interface';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = 'https://avetiq-test.firebaseapp.com/proscons/group/g1557577521809/user/u1557577521808'

  private pros: string[];
  private cons: string[];

  constructor(private http: HttpClient, private _store: Store<any>) {
    this._store.pipe(select('_methods')).subscribe(res => {
      this.pros = res.pros
      this.cons = res.cons
    })
  }

  getData() {
    return this.http
      .get(this.api)
      .pipe(map(res => res))
  }

  updateData() {
    const data = {
      pros: this.pros,
      cons: this.cons
    }
    return this.http
      .put(this.api, data)
      .pipe(map(res => res))
  }

}