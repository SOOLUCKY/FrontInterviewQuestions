// 构造函数继承
function Super(){
    this.name = ["张三", "李四"];
}

function Sub(){
    Super.call(this);
}

let a = new Sub();
// a.name.push("王五");
console.log(a.name)

// class 继承
class Father {
    constructor(name) {
        this.name = name;
    }

    hello (){
        console.log('Hello:', this.name)
    }
}

class Son extends Father {
    constructor(name) {
        super(name);
        console.log(name)
    }
}

let res = new Son('张三');
res.hello();