//비동기 part2
/*Promise : 언젠가 해결될 것이란 약속
new Promise((resolve, reject)) => {}
Resolve -> 해결, 성공 -> then
Reject -> 거절, 실패 ->catch
*/
//Async Func

function sayHello(name, byeCallback){
    setTimeout(() => {
        console.log(name+"님 안녕하세요");
        byeCallback()
    }, 2000);
}
setTimeout(() => {console.log("안녕하세요\n------------")}, 2000) 

sayHello("효경", function() 
    {console.log("안녕히 가세요\n-------------")
}) 

//callback가독성 떨어짐

function sayHello2(name){
    return new Promise((resolve, reject) => { //resolve 와 reject는 정해진 함수
        setTimeout(() => {
            console.log(name+"님 안녕하세요")
            resolve(name+"님 집으로") //인수 추가 가능
        }, 3000)
    }
         
    )
}

//sayHello2("Frank")
//    .then((home)=> console.log(home+" 이젠 가세요")) // 함수 호출 성공하면 이거 실행


/* 
then을 좀 더 직관적으로 사용하고 싶을 때
"async" function func_name(p) {
    const result = "await" get_result() // 결과가 오래 걸리는 함수를 기다려주겠다. 동기적으로 하겠다.
}*/

/* async function sayHelloBye(name){
     await sayHello2(name)
     console.log("안녕히 가세요")
 }
*/

//resolve값을 받아서 적어줄 수도 있음
async function sayHelloBye(name){
    tohome = await sayHello2(name) // 밑에 안녕히 가세요를 바로 실행시키지 않고 기다림 //await없애보고 결과 보기
    console.log(tohome + " 안녕히 가세요")
}

sayHelloBye("Hyo")

/*
1.비동기의 문제를 해결하기 위한 callback
2.작업이 완료되면 알려주는 callback은 가독성이 좋지 않았다.
3.그래서 나온 것이 완료를 약속하는 Promise다
4.Then과 catch로 편리한 사용이 가능하다
5.더 편리하게 만든 것이 async/await이다
 */