//상속 - 모듈화시킴, 상위클래스화
class Animal{
    constructor(leg){
        this.leg = leg
    }
    printAnimal(){
        console.log(this.name+" has "+String(this.leg)+" legs") //자식 this.name가져다쓸 수 있음
    }
}

//Class
//Animal의 유용한 기능 갖다 쓰기
class Lion extends Animal {
    constructor(name, leg){
        super(leg) //super는 부모의 input
        this.name = name
    }
    getName(){
        console.log("My name is "+this.name)
    }
}

myAnimal = new Lion("KING", 4)
myAnimal.getName()
myAnimal.printAnimal()