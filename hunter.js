class Hunter extends Traveler {
  constructor(name, food = 2, isHealthy) {
    super(name, food);
    this.food = food;
  }
  hunt() {
    this.food += 5;
  }

  eat() {
    if (this.food < 2) {
      this.isHealthy = false;
      this.food = 0;
    } else {
      this.food -= 2;
    }
  }

  giveFood(traveler, numOfFoodUnits) {
    if (this.food > numOfFoodUnits) {
      traveler.food += numOfFoodUnits;
      this.food -= numOfFoodUnits;
    }
  }
}
