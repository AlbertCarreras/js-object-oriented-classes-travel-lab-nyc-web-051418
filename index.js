class Driver {

  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);

  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }

}

class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = {'1st Avenue': 1, '2nd Avenue': 2, '3rd Avenue': 3, 'Lexington Avenue': 4, 'Park':5, 'Madison Avenue':6, '5th Avenue':7}
    let vertDist = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    let horiDist =  eastWest[this.endingLocation.horizontal] - eastWest[this.beginningLocation.horizontal]
    let totalDist = vertDist + horiDist
    return totalDist
  }

  estimatedTime(peak) {
    let blocksPerMinute = 2;
    if (typeof(peak) === "undefined") {
      blocksPerMinute = 3;
    }
    let distance = this.blocksTravelled();
    let time = distance / blocksPerMinute;
    return time;
  }

}
