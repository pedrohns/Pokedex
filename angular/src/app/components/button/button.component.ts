import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '@services/api.service';
// import { environment as env } from '@enviroments/environment';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  // Chamada HTTP
  #apiService = inject(ApiService);
  

  buttonText = 'Gerar Pokemons';
  isLoading = false;
  generatePokemons():void{
    console.log('veio aqui')
    this.isLoading = true;
    this.buttonText = 'Gerando Pokemons...'
    this.#apiService.httpGetCreate$().subscribe({
      next: (next) => {
        this.isLoading = false;
        console.log(next.quote);
        this.buttonText = 'Gerar Pokemons'
      },
      error: (error) => console.log(error),
    });
    

    // Aqui será a chamada HTTP
    // setTimeout(() => {
    //   this.isLoading = false;
    //   console.log('está gerando');
    //   this.buttonText = 'Gerar Pokemons'
    // }, 1000 * 5);
  }

}
