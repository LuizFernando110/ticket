import { Component, computed, signal} from '@angular/core';
import { TicketItemComponent } from '../ticket-item-component/ticket-item-component';

@Component({
  selector: 'app-checkout-component',
  imports: [TicketItemComponent],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.css',
})
export class CheckoutComponent {
  quantity = signal(1);
  statusMessage = signal("Aguardando finalização...");
  
  totalPrice = computed(() => this.quantity() * 150);
  
  handleCancel() {
    this.statusMessage.set('O usuário solicitou o cancelamento da compra!');
  }
}
