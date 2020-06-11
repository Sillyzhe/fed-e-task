"use strict";
exports.__esModule = true;
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
var tuple = [18, 'foo'];
var age = tuple[0], name = tuple[1];
// 枚举类型
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 0] = "Draft";
    PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
    PostStatus[PostStatus["Published"] = 2] = "Published";
})(PostStatus || (PostStatus = {}));
var post = {
    title: 'Hello TypeScript',
    content: 'Typescript is a typed superset of JavaScript.',
    status: PostStatus.Draft
};
