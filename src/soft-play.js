// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  }
  return false
}

function leave(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false
  }

  const remainingChildren = children - numChildren
  const remainingAdults = adults - numAdults

  if (remainingChildren > remainingAdults) {
    return false
  }

  children -= numChildren
  adults -= numAdults

  return true
}

function occupancy() {
  return { adults: adults, children: children }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy
}
