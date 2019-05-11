import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Store, select } from '@ngrx/store';
import * as Actions from '../../store/methods.actions'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['../cons/cons.component.scss']
})
export class ProsComponent implements OnInit {

  private data: string[];
  private unSub: Subscription;

  constructor(private apiService: ApiService, private _store: Store<any>) {
    this.unSub = this._store.pipe(select('_methods')).subscribe(res => {
      this.data = res.pros
    })
    if (this.data.length > 0) {
      this.unSub.unsubscribe()
    }
  }

  ngOnInit() {
  }

  addItem(inp: HTMLInputElement) {
    if(this.data == undefined){
      this.data = [inp.value]
    }
    else{
      this.data.push(inp.value)
    }
    inp.value = "";
    this._store.dispatch(new Actions.ProsData(this.data))
    this.updateData()
  }


  changeName(idx: number) {
    const text: HTMLDivElement = document.querySelector(`div[id="pros-${idx}"]`)
    const input: HTMLInputElement = document.querySelector(`input[id="pros-${idx}"]`)
    input.value = text.innerText.trim()
    text.style.display = 'none'
    input.removeAttribute('hidden')
    input.focus()

    input.addEventListener('focusout', () => {
      text.innerText = input.value
      text.style.display = 'unset'
      input.setAttribute('hidden', '')
      this.data[idx] = text.innerText
      this.updateData()
    })
  }

  removeItem(index: number) {
    this.data.splice(index, 1)
    this._store.dispatch(new Actions.ProsData(this.data))
    this.updateData()
  }

  updateData() {
    this.apiService
      .updateData()
      .subscribe(res => {
      })
  }
}
