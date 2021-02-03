export class Ingredient {

  // shortcut
  // simply adding an accessor to our arguments and it will automatically give us properties
  // and will also assign the values we receive in the constructor
  constructor(public name: string, public amount: number) {}
}
