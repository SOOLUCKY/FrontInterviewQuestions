function Foo(){
    getName = function () {
      console.log(1);
    }
    return this;
}
Foo.getName = function() {
  console.log(2);
};
Foo.prototype.getName = function(){
  console.log(3);
};
var getName = function(){
  console.log(4);
};
function getName(){
  console.log(5)
};

Foo.getName() //2
getName() //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2
new Foo().getName(); //3
new new Foo().getName(); //3


// todo 解析



function fun() {
    this.a = 0;
    this.b = function(){
        console.log(this)
        console.log(this.a)
    }
}

fun.prototype = {
    b: function(){
        this.a = 20;
        console.log(this.a)
    },
    c: function(){
        this.a = 30;
        console.log(this.a)
    }
}

var my_fun = new fun();
my_fun.b(); //0
console.log(my_fun.a); //0
my_fun.c(); //30
console.log(my_fun.a); //30
var my_fun2 = new fun();
console.log(my_fun2.a) //0
my_fun2._proto_.c(); //30
console.log(my_fun2.a) //0
console.log(my_fun2._proto_.a);//30

function setName(obj){
    obj.name = 'Tom';
    obj = new Object();
    obj.name = 'Mike'
}

var person = new Object()
setName(person)
console.log(person.name) // Tom
