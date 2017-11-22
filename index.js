function produceDrivingRange(firstBlock, secondBlock){
  return function(range){
    let blockDiff = secondBlock - firstBlock;
    if (blockDiff < range){
      return `within range by ${range - blockDiff}`
    } else {
      return `${blockDiff - range} blocks out of range`
    }
  }
}
