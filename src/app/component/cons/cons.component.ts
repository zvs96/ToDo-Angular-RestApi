import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Store, select } from '@ngrx/store';
import * as Actions from '../../store/methods.actions'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.scss']
})
export class ConsComponent implements OnInit {

  private data: string[];
  private unSub: Subscription;

  constructor(private apiService: ApiService, private _store: Store<any>) {
    this.unSub = this._store.pipe(select('_methods')).subscribe(res => {
      this.data = res.cons
    })
    if (this.data.length > 0) {
      this.unSub.unsubscribe()
    }
  }

  ngOnInit() {
  }

  addItem(inp: HTMLInputElement) {
    this.data.push(inp.value)
    inp.value = ""
    this._store.dispatch(new Actions.ConsData(this.data))
    this.updateData()
  }

  changeName(elm: MouseEvent, idx: number) {
    const text: HTMLDivElement = (elm.srcElement as HTMLElement).children[0] as HTMLDivElement
    const input: HTMLInputElement = (elm.srcElement as HTMLElement).children[1] as HTMLInputElement
    input.value = text.textContent.trim()
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
    this._store.dispatch(new Actions.ConsData(this.data))
    this.updateData()
  }

  updateData() {
    this.apiService
      .updateData()
      .subscribe(res => {
      })
  }
}
