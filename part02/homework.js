// ---------------------------------------------------
// 代码题1

const fp = require('lodash/fp')
const _ = require('lodash')
// 数据
// horsepower 马力，dollar_value 价格，in_stock 库存
const cars = [{
    name: "Ferrari FF",
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true
}, {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
}, {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
}, {
    name: "Audi R8",
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false
}, {
    name: "Astor Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
}, {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false
}]

// 练习1

const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log(isLastInStock(cars)) 
//flase

// 练习2

const isFirstName = fp.flowRight(fp.prop('name'), fp.first)
console.log(isFirstName(cars))  
//Ferrari FF

// 练习3

let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}

const averageDollarValue = fp.flowRight(_average, fp.map(item => item.dollar_value))
console.log(averageDollarValue(cars))
//790700

// 练习4

let _underscore = fp.replace(/\W+/g, '_')

const sanitizeNames = fp.flowRight(fp.toLower, _underscore)
cars.forEach(car => console.log(sanitizeNames(car.name)))
// ferrari_ff
// spyker_c12_zagato
// jaguar_xkr_s
// audi_r8
// astor_martin_one_77
// pagani_huayra

// ------------------------------------------------------------
// 代码题2

const {
    Maybe,
    Container
} = require('./support')

// 练习1

let maybe = Maybe.of([5, 6, 1])
let ex1 = function (num) {
    return maybe.map(i => fp.map(item => {
        return fp.add(item, num)
    }, i))
}
console.log(ex1(2)._value)
// [ 7, 8, 3 ]


// 练习2

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = xs.map(x => fp.first(x))
console.log(ex2._value)
// do

// 练习3

let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = {
    id: 2,
    name: 'Albert'
}
let ex3 = safeProp('name', user).map(x => fp.first(x))
console.log(ex3._value)
// A

// 练习4
let ex4 = Maybe.of(3.2).map(x => parseInt(x))
console.log(ex4._value)
// 3