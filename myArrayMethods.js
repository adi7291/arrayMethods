const myArray=[1,2,3,4,5]

//  .map methos return an same array and modified Array 
//forEach  methos return undefined

const mapArray=myArray.map(item=>item*3)
console.log(mapArray)//) [3, 6, 9, 12, 15]

const forEachArray= myArray.forEach(item=>item*3)

console.log(forEachArray)//undefined

//map method is chainable 
//for method is not chainable

const newMap =mapArray.map(item=>{
    return item+5
}).reduce((total,value)=>{
    return total+value
})
console.log(newMap)//70

const startForEach =performance.now()
 
myArray.forEach(x=>(x*x*x*x)*123415151)

const  endForEach=performance.now()

console.log(`speed forEach method is ${startForEach-endForEach} ms`)


const startMap=performance.now()
 
myArray.map(x=>(x*x*x*x)*12341121215151)

const  endMap=performance.now()

console.log(`speed forEach method is ${startForEach-endForEach} ms`)

const arrayObject=[
	{
		color: "red",
		value: "#f00",
        name:"ramesh",
        age:31
	},
	{
		color: "green",
		value: "#0f0",
        name:"ramesh",
        age:31

	},
	{
		color: "blue",
		value: "#00f",
        name:"ramesh",
        age:35
	},
	{
		color: "cyan",
		value: "#0ff",
        name:"vikash",
        age:31

	},
	{
		color: "magenta",
		value: "#f0f",
        name:"narayan",
        age:56
	},
	{
		color: "yellow",
		value: "#ff0",
        name:"buchi",
        age:60
	},
	{
		color: "black",
		value: "#000",
        name:"bhwana",
        age:25
	}
]

const newArrayObject =arrayObject.map(i=>i)
console.log(newArrayObject[0].name
    )
    //ramesh

// const newArrayForEach = arrayObject.forEach(item=>console.log(item.name.toUpperCase())) //Ramesh , Viaksh ,Narayan ,Buchi Bhawana all in upper case
const newArrayForEach = arrayObject.forEach(item=> {
    return item.name.toUpperCase()
})
console.log(newArrayForEach)//undefined

const arrayMapChainable = arrayObject.map(item=>{ return item}).filter(item=>item.name==="ramesh")
console.log(arrayMapChainable)

let users = [{
    id:1,
    name: 'John',
    age: 22,
    course:200
}, {
    id:2,
    name: 'Tom',
    age: 22,
    course:300
}, {
    id:3,
    name: 'Balaji',
    age: 24,
    course:500
}];


//find()
//it never goes to all the arrays elements it stops whenever it get the first matched.... it return lelment not array
//return item inside array if condition satisfied
//if not matched return undefined
console.log(users.find(user=>user.age>23))//{ id: 3, name: 'Balaji', age:24}

console.log(users.find(user => user.age === 22));//{id: 1, name: 'John', age: 22}

console.log(users.find(user => user.age === 25));//undefined

console.log(myArray.map(item=>item*4).find(value=>value<4))//undefined

console.log(myArray.map(item=>item*4).find(value=>value<9))//4 we can have 8 also but since find got the first match it return 4 and not going for further match

console.log(myArray.map(item=>item*4).find(value=>value>4))//8

//filter()
//it checks all the value in the array and return result as an array if condition matched or not matched it will return an array
//1>Filter method return Array if condition matched
//if condition not matched it returns empty array []

console.log(users.filter(user=>user.age>23)) 

// [{…}]
// 0: {id: 3, name: 'Balaji', age: 24}
// length: 1
// [[Prototype]]: Array(0)

console.log(users.filter(user=>user.age===25))//[]

console.log(users.filter(user=>user.age===22))

// (2) [{…}, {…}]
// 0: {id: 1, name: 'John', age: 22}
// 1: {id: 2, name: 'Tom', age: 22}
// length: 2
// [[Prototype]]: Array(0)

console.log(myArray.map(item=>item*5).filter(values=>values>12))//[15, 20, 25]

//==================================================================================================================================================================

//sort()

//return array in the arranged format 
const value=[1,3,2,4,6,5,8,7]

console.log(value.sort())//[1, 2, 3, 4, 5, 6, 7, 8]

const stringValue=["ram","shyam" ,"narayan","shiva","hanuman"]

console.log(stringValue.sort())//['hanuman', 'narayan', 'ram', 'shiva', 'shyam']


console.log(arrayObject.sort((a,b)=>{
    return a.name.localeCompare(b.name)
}))
// {color: 'black', value: '#000', name: 'bhwana', age: 25}
// 1: {color: 'yellow', value: '#ff0', name: 'buchi', age: 60}
// 2: {color: 'magenta', value: '#f0f', name: 'narayan', age: 56}
// 3: {color: 'red', value: '#f00', name: 'ramesh', age: 31}
// 4: {color: 'green', value: '#0f0', name: 'ramesh', age: 31}
// 5: {color: 'blue', value: '#00f', name: 'ramesh', age: 35}
// 6: {color: 'cyan', value: '#0ff', name: 'vikash', age: 31}
// we can sort the string by using localcompare()


//some & every

//it also return boolean
//it checks for any value match ie if atleast one value is matched it return true

console.log(arrayObject.some(item=>item.age>70))//false

console.log(arrayObject.some(item=>item.age>40))//true


//every()
//it also return boolean
//it is a type of AND logic
//it checks for all value match ie. if all condition is satisfied then only it return 

console.log(arrayObject.every(item=>item.age>40))//false

console.log(arrayObject.every(item=>item.age<80))//true


//reduce
let userss = [{
    id:1,
    name: 'John',
    age: 22,
    course:200
}, {
    id:2,
    name: 'Tom',
    age: 22,
    course:300
}, 
{
    id:3,
    name: 'Balaji',
    age: 24,
    course:500
}
];
  let initialVlaue=0
  const totall =myArray.reduce((total,value,index)=>{
    console.log(`...${index}....`)
    console.log(`value------${value}`)
    console.log(`total ----${total}`)
    return total+value
  },initialVlaue)
  console.log(totall)
const initialValues =0
  const userReduce= userss.reduce((total,value,index)=>{
        console.log(`....index....${index}`)
        console.log(`....value....${value.course}`)
        console.log(`....total .... ${total}`)
        return total + value.course
  },initialValues)
console.log(userReduce)


//include 
//it returns boolean value
//its check weather the item present in the array or not
console.log(myArray.includes(5))//true
console.log(myArray.includes(45))//false


//concate 
//ti returns array
//by combining two array
console.log(myArray.concat(stringValue)) //(10) [1, 2, 3, 4, 5, 'hanuman', 'narayan', 'ram', 'shiva', 'shyam']


//flat
//it returns the array
//it is used when we have nested array and we need to remove all nested array and insert it into single array

const numbers=[1,2,3,4,[2,3,4, ["ram", "shyam"]]]

console.log(numbers.flat())//) [1, 2, 3, 4, 2, 3, 4, Array(2)]


console.log(numbers.flat(2))// [1, 2, 3, 4, 2, 3, 4, 'ram', 'shyam'] ***** //console.log(numbers.flat().flat())// [1, 2, 3, 4, 2, 3, 4, 'ram', 'shyam'] ****

console.log(numbers.flat(2).map(item=>{
    return item*3
}))// [3, 6, 9, 12, 6, 9, 12, NaN, NaN]
//we can use flatMap() instead of  .falt().map()







































