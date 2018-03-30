function mergeArray( array1 , array2 ){
  for ( i = 0; i < array2.length; i++ ){
    if ( array1.includes(array2[i]) == false ){
      array1.push(array2[i])
    }
  }
  return array1.sort()
}
