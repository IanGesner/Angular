import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameRef: ElementRef;
  @ViewChild('amountInput')
  amountRef: ElementRef;

  @Output()
  newIngredient = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    this.newIngredient.emit(
      { name: this.nameRef.nativeElement.value, 
      amount: this.amountRef.nativeElement.value }
    );
  }
}
