import { Component, Inject, OnInit, signal } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { IDetailList } from '@interfaces/IResponsesAPI.interface';
import { toUpperCase } from '@utils/utilCustom';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{

  constructor(
    private _modalRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IDetailList
  ) {}
  getDetailPokemon = signal<IDetailList | null>(null);

  ngOnInit(): void {
    this.getDetailPokemon.set(this._data);
  }

  closeModal(){
    return this._modalRef.close();
  }

  upperFirstLetter(nome: string | undefined):string {
   return toUpperCase(nome);
  }

}
