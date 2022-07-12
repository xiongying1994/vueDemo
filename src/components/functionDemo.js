let obj = {
  a: 10,
  b: function (n) {
    // 箭头函数
    let f = (n) => {
      return n + this.a
    }
    return f(n)
  },
  c: function (n) {
    // 箭头函数
    let f = (n) => {
      return n + this.a
    }
    let m = {
      a: 20
    }
    return f.call(m, n)
  },
  d: function (n) {
    // 普通函数
    let f = function (n) {
      return n + this.a
    }
    let m = {
      a: 20
    }
    return f.call(m, n)
  }
}
console.log(obj.b(1)) // 11
console.log(obj.c(1)) // 11
console.log(obj.d(1)) // 21

let obj1 = {
  a: 1
}
let obj2 = {
  a: 2
}
let sayName = function () {
  return this.a
}
console.log(sayName()) // undefined 内部this代表window
console.log(sayName.call(this)) // undefined 内部this代表window
console.log(sayName.call(obj1)) // 1 内部this代表obj1
console.log(sayName.call(obj2)) // 2 内部this代表obj2
