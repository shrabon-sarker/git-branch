var n = "this is a name";

console.log(n)

const myFun = (a, b) => a*b;
console.log(myFun(2,8))

const obj = {
    name : "this is a name biaksh",
    age: 12,
    print(){
        setTimeout(() => {
            console.log(name)
        }, 1000);
    }
}

obj.print();