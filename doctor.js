class Doctor extends Traveler {
  constructor(name) {
    super(name);
  }
  heal(traveler) {
    traveler.isHealthy = true;
  }
}
