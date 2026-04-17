import { Component, computed, LOCALE_ID, signal} from '@angular/core';
import { TicketItemComponent, TicketType } from '../ticket-item-component/ticket-item-component';
import { CardComponent } from '../card-component/card-component';
import { SummaryPipe } from '../summary/pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-component',
  standalone: true,
  imports: [TicketItemComponent, CardComponent, SummaryPipe, CommonModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.css',
})
export class CheckoutComponent {
  tickets = signal([
    { id: 1, name: 'VIP Pass', desc: 'Acesso total ao backstage e buffet.', price: 1200, date: new Date(2026, 5, 15), type: TicketType.VIP, qty: 1 },
    { id: 2, name: 'Standard', desc: 'Acesso às palestras principais.', price: 450, date: new Date(2026, 5, 15), type: TicketType.Standard, qty: 1 },
    { id: 3, name: 'Meia-Entrada', desc: 'Benefício conforme legislação.', price: 225, date: new Date(2026, 5, 15), type: TicketType.MeiaEntrada, qty: 1 }
  ]);

  totalQuantity = computed(() => 
    this.tickets().reduce((acc, t) => acc + t.qty, 0)
  );

  calculateTotal() {
    return this.tickets().reduce((acc, t) => acc + (t.price * t.qty), 0);
  }
}