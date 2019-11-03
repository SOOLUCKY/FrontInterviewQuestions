function f1(){
    var n = 999;
    nAdd = function(){
        n += 1;
    }
    function f2(){
        console.log(n)
    }
    return f2;
}

var result = f1();
result(); // 999
nAdd(); //
result(); //1000

var name = "the window";
var object = {
    name: "my object",
    getNameFunc: function(){
        return this.name;
    }
}
console.log(object.getNameFunc()())