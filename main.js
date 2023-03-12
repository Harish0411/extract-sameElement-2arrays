  function same(a,b){
    var newArray=[]
    for(i=0;i<a.length;i++){
      for(j=0;j<b.length;j++){
        if(a[i]===b[j] && !newArray.includes(a[i])){
          newArray.push(a[i])
        }
      }
    }

    return newArray
  }  

  console.log(same([5,8,6,7],[10,5,9,7,11]))
  console.log(same([45,95,75,65,12,95,74],[95,35,95,65,45,17,16,96]))