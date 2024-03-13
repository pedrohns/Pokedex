import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componentes
import { ButtonComponent } from '@components/button/button.component';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonComponent, CardComponent],
  template: `<router-outlet />
            <app-button />
            <app-card />
            <!-- <app-new-component /> -->
            
  `,
})
export class AppComponent {
}
