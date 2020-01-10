//비동기성 : 모든게 절차적으로 실행되지않음
/*필요한 이유 : js가 웹에 치중해 있고 웹은 인터넷 속도에 의존적이며 user-interaction이 많아서
속도가 느려도 interaction이 되어야 하기때문에
예) 페이스북 틀 먼저 뜸*/
setTimeout(() => {console.log("안녕하세요\n------------")}, 2000)

console.log("안녕히 가세요")

//callback === 다되면 알려줘
function sayHello(name, byeCallback){
    setTimeout(() => {
        console.log(name+"님 안녕하세요"); //이거 먼저 실행 한 다음 sayGoodbye함수 실행해라
        byeCallback()
    }, 2000);
}
setTimeout(() => {console.log("안녕하세요\n------------")}, 2000) //초가 길어지면 더 나중에 실행됨

sayHello("효경", function() {console.log("안녕히 가세요")}) //()안이 다 byeCallback함수