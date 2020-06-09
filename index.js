const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let object=array.find(x=>x.result==='W')
  return object.year;
}