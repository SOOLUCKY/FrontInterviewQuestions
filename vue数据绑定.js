// var data = { name: 'xcl' };
// observe(data)
// let name = data.name
// data.name = 'yyy'

function observe(obj) {
    // 判断类型
    if (!obj || typeof obj !== 'object') {
        return
    }

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, key, val) {
    // 递归子属性
    observe(val)
    let dp = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get value')
            // 将watcher添加到订阅
            if(Dep.target) {
                dp.addSub(Dep.target)
            }
            return val
        },
        set: function reactiveSetter(newVal) {
            console.log('change value')
            val = newVal
            // 执行watcher的update方法
            dp.notify()
        }

    })
}


// 通过Dep 解耦
class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        // sub是watcher的实例
        this.subs.push(sub)
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

//全局属性，通过该属性配置watcher
Dep.target = null

function update(value) {
    document.querySelector('div').innerHTML = value
}

class Watcher {
    constructor(obj, key, cb) {
        // 将Dep.target指向自己
        // 然后触发属性的getter添加监听
        // 最后将Dep.target 置空
        Dep.target = this;
        this.cb = cb;
        this.obj = obj;
        this.key = key;
        this.value = obj[key]
        Dep.target = null
    }

    update(){
        // 获得新值
        this.value = this.obj[this.key]
        this.cb(this.value);
    }
}

var data = {name: 'yck'}
observe(data)
// 模拟解析到`{{name}}` 触发的操作
new Watcher(data, 'name', update)
// update Dom innerText
data.name = 'yyy'


const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)
// hack 以下几个函数
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsToPatch.forEach(function(method){
    // 获得原生函数
    const original = arrayProto[method]
    def(arrayMethods, method, function mutator(...args){
        // 调用原生函数
        const result = original.apply(this, args)
        const ob = this._ob_
        let inserted
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args    
                break;
            case 'splice':
                inserted = args.slice(2)
                break    
        }
        if(inserted) ob.observeArray(inserted)
        // 触发更新
        ob.dep.notify()
        return result
    })
})

let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, property, receiver) {
            getLogger(target, property)
            return Reflect.get(target, property, receiver)
        },
        set(target, property, value, receiver) {
            setBind(value)
            return Reflect.set(target, property, value)
        }
    }

    return new Proxy(obj, handler)
}

let obj = {a:1}
let value
let p = onWatch(
    obj, 
    v => {
        value = v
    },
    (target, property) => {
        console.log(`get '${property}' = ${target[property]}`)
    }
)

p.a = 2;
p.a





