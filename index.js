function produceDrivingRange(firstBlock, secondBlock){
  return function(range){
    let blockDiff = secondBlock - firstBlock;
    let rangeDiff = range - blockDiff;
    if (blockDiff < range){
      return `within range by ${rangeDiff}`
    } else {
      return `${rangeDiff} blocks out of range`
    }
  }
}
