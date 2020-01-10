//ArrowFinction
function plusTwo(s){
    return s+2
}

//간소화
plusThree = (t) => {
    return t+3
}

//더 간소화
plusFour = (f) => f+4

//좀더 간소화
plusFive = fi => fi+5

console.log(plusTwo(10))
console.log(plusThree(10))
console.log(plusFour(10))
console.log(plusFive(10))

//Map - 한 번에 관리 & Filter - 조건에 맞는거 뽑아내기
arr = [1,2,3,4,5,6,7,8,9,10]

arr_map = arr.map(function(value) {return value*2}) //value라고 적을필요는 없음.
console.log(arr_map)

//간소화
arr_m = arr.map(v => {return v*3})
console.log(arr_m)

//더 간소화
arr_map = arr.map(v => v*4)
console.log(arr_map)

//filter
arr_filter = arr.filter(c => c > 4)
console.log(arr_filter)