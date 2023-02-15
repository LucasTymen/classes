class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -=daysOff;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

// courses :

/*
Class method and getter syntax is the same as it is for objects except you can
not include commas between methods.

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

In the example above, we add getter methods for name and behavior. Notice, we
also prepended our property names with underscores (_name and _behavior), which
indicate these properties should not be accessed directly. Under the getters,
we add a method named .incrementBehavior(). When you call .incrementBehavior()
on a Dog instance, it adds 1 to the _behavior property. Between each of our
methods, we did not include commas.

*/
