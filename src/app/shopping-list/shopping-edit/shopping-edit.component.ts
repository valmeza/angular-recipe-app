import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // below type definition is just a JS object with two properties
  // it is not a value.
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    // pass the data to the parent component
    // in this case this will be the shopping-list
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(
      ingredientName,
      ingredientAmount
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
