import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-ticket-item-component',
  imports: [],
  templateUrl: './ticket-item-component.html',
  styleUrl: './ticket-item-component.css',
})
export class TicketItemComponent {
  eventName = input.required<string>();
  ticketQuantity = model(1);
  cancelRequest = output<void>();
  
  increment() {
    this.ticketQuantity.update(val => val + 1);
  }
  
  decrement() {
    if (this.ticketQuantity() > 1) {
      this.ticketQuantity.update(val => val - 1);
    }
  }
  
  onCancel() {
    this.cancelRequest.emit();
  }
  
  searchCupom(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    alert(`Buscando cupom: ${value}`);
  }
}
