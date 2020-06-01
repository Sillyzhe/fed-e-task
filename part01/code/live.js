// 1.执行流程问题------------------------------------------------

setTimeout(() => {
    console.log('A')
}, 0);
// 2.Promise.all()

// axios 是支持同构的(Node/Browser)

const urls = [
    'https://www.github.com',
    'https://www.github.com/users',
]

urls.forEach(item => {
    axios(item)
})
const promises = urls.map(item => {
    axios(item)
})

const p = Promise.all(promises)

p.then(res => {
    console.log('all complted')
}).catch(error => {
    console.log(error)
})