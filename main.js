class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

hunt() {
    this.food += 2
}

eat() {
    if(this.food <= 0) {
        return this.isHealthy === false
    }
    this.food -= 1
}
}


class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if(this.getAvailableSeatCount()>= 1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for( let index = 0; index < this.passengers.length; index += 1){
            if(this.passengers[index].isHealthy === false) {
                return true
            }
        }
    }

    totalFood() {
        let total = 0
        for(let index = 0; index < this.passengers.length; index += 1){
            total += this.passengers[index].food
        }
        return total
    }

}
