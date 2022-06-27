const myObj = [
    {
        hasList: "fdfsfs"
    },
    {
        name: "fred",
        age: 22
    }
]

myObj.map(item => {
    console.log('item.hasList: ', item.hasList !== undefined)
})

let obj3 = {
}

obj3['region'] = 'philadelphia';

console.log(obj3);

obj3['kin'] = 'samsom'

console.log(obj3)