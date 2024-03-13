import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

// HTTP SERVICES
import { ApiService as api } from '@services/api.service';

// Interfaces
import { IDetailList } from '@interfaces/IResponsesAPI.interface';

// Utils
import {colorDictionary, toUpperCase} from '@utils/utilCustom';
import { ModalComponent } from '@components/modal/modal.component';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  #dialog = inject(MatDialog);

  #apiService = inject(api);
  pokemonsArray = signal<null | IDetailList[]>(null);
  pokemonsArray$ = this.#apiService.httpGetPokemons$();
  isFocused: { [key: string]: boolean } = {};
  // isFocused = signal<{ [key: string]: boolean } | null>(null)

  className = signal('card-orange');


  ngOnInit(): void {
    this.pokemonsArray$.subscribe({
      next: (next) => {
        console.log(next.resp[0].seletor);
        this.pokemonsArray.set(next.resp)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  changeClass(color: Uint8Array): string | undefined {
    return colorDictionary(Number(color))
  }
  upperName(name: string): string {
    return toUpperCase(name);
  };
  onMouseEnter(id:string): void{
    this.isFocused[id] = true;
    // this.isFocused([id]).set(true);
  }
  onMouseLeave(id: string): void{
    setTimeout(() => this.isFocused[id] = false, 1000 * 1.5)
  }

  openModal(item:IDetailList) {
    this.#dialog.open(ModalComponent, {
      data: item,
      panelClass: 'dialog-container-projects',
    })
  }

}
