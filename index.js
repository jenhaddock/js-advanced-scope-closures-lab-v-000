function produceDrivingRange(range){
  return function(firstBlock, secondBlock){
    let blockDiff = secondBlock - firstBlock;
    let rangeDiff = range - blockDiff;
    if (blockDiff < range){
      return `within range by ${rangeDiff}`
    } else {
      return `${rangeDiff} blocks out of range`
    }
  }
}
