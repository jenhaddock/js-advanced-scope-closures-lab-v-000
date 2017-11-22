function produceDrivingRange(range){
  return function(firstBlock, secondBlock){
    let blockDiff = Math.abs(parseInt(secondBlock) - parseInt(firstBlock));
    if (blockDiff < range){
      return `within range by ${range - blockDiff}`
    } else {
      return `${blockDiff - range} blocks out of range`
    }
  }
}


function produceTipCalculator(percentage){
  return function calculateTip(fare){
    return fare * percentage;
  }
}