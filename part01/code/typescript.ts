export { } //确保跟其他示例没有成员冲突


// 原始类型
// const a: string = 'foobar'

// const b: number = 100 //NaN Infinity

// const c: boolean = true //false

// const e: void = undefined

// const f: null = null

// const g: undefined = undefined

// const h: symbol = Symbol()

// const err: string = 100


// Object 类型（所有非原始类型）


// const foo: object = {}   //{} []  function(){}

// const obj: { foo: number, bar: string } = { foo: 123, bar: 'bar' }


// 数组类型

// const arr1: Array<number> = [1, 2, 3]
// const arr2: number[] = [1, 2, 3]

// function sum(...args: number[]) {
//   // 判断是不是每个成员都是数字
//   return args.reduce((prev, current) => prev + current, 0)
// }

// sum(1, 2, 3, 'foo')

// 元组类型 


// const tuple: [number, string] = [18, 'foo']

// const [age, name] = tuple;


// 枚举类型



// enum PostStatus {

//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }
// const post = {
//   title: 'Hello TypeScript',
//   content: 'Typescript is a typed superset of JavaScript.',
//   status: PostStatus.Draft
// }

// 函数类型

// function func1(a: number, b: number = 10, ...rest: number[]): string {
//   return 'func1'
// }
// func1(100)

// 任意类型

// function stringify(value: any) {
//   return JSON.stringify(value)
// }
// stringify('string')
// stringify(100)
// stringify(true)

// 隐式类型推断

// let age
// age = 'string'
// age = 10

// 类型断言

// const nums = [110, 120, 119, 112]

// const res = nums.find(i => i > 0) as number;
// const square = res * res;

// const num1 = res as number;

// const num2 = <number>res  //JSX 不能使用


// 接口

// interface Post {
//   title: string;
//   content: string;
//   subtitle?: string;
//   readonly summary: string
// }



// function printPost(post: Post) {
//   console.log(post.title);
//   console.log(post.content)
// }


// interface Cache {
//   [prop: string]: string
// }

// 类

// class Person {
//   public name: string
//   private age: number
//   protected readonly gender: boolean  //允许在子类中访问
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.gender = true;
//   }
//   sayHi(msg: string): void {
//     console.log(msg)
//   }
// }
// class Student extends Person {
//   private constructor(name: string, age: number) {
//     super(name, age);
//     console.log(this.gender)
//   }
//   static create(name: string, age: number) {
//     return new Student(name, age)
//   }
// }


// const tom = new Person('tom', 18)
// console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

// const jack = Student.create('jack', 18)
// const lili = new Student('lili', 23)


// 类与接口
// interface EatAndRun {
//   eat(food: string): void
//   run(distance: number): void
// }

// interface Eat {
//   eat(food: string): void
// }

// interface Run {
//   run(distance: number): void
// }

// class Person implements EatAndRun {
//   eat(food: string): void {
//     console.log(`优雅的进餐：${food}`)
//   }
//   run(distance: number) {
//     console.log(`直立行走:${distance}`)
//   }
// }

// class Animal implements Eat, Run {
//   eat(food: string): void {
//     console.log(`呼噜呼噜的吃：${food}`)
//   }
//   run(distance: number) {
//     console.log(`爬行：${distance}`)
//   }
// }

// 抽象类——不包含具体实现


// abstract class Animal {
//   eat(food: string): void {
//     console.log(`呼噜呼噜的吃：${food}`)
//   }
//   abstract run(distance: number): void
// }

// class Dog extends Animal {
//   run(distance: number): void {
//     console.log('四角爬行', distance)
//   }
// }


// 泛型——声明时不指定具体类型，调用时传递具体类型

// function createNumberArray(length: number, value: number): number[] {
//   const arr = Array<number>(length).fill(value)
//   return arr
// }

// function createStringArray(length: number, value: string): string[] {
//   const arr = Array<string>(length).fill(value)
//   return arr
// }

// function createArray<T>(length: number, value: T): T[] {
//   const arr = Array<T>(length).fill(value);
//   return arr
// }


// 类型声明

// declare function Fun1(name:string):string