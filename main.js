let news=[{title:"khvjh",writer:"jhfk",date:2021},
{title:"gckvh",writer:"gckjh",date:2014},
{title:"hlvgkj",writer:"hlkgj",date:2012}]

news.forEach((news1)=>{
console.log(news1)
})

for(const news1 in news){
    console.log(news[news1])
}
``

let objs=[{name:"hfjg",age:30,school:"hjfkhg"},
{name:"hfjgjh",age:30,school:"hjfkhg"},
{name:"hfjgjhgjh,",age:30,school:"hjfkhg"}]

for(const key in objs){
    console.log(`name:${objs[key].name},age:${objs[key].age},school:${objs[key].school}`)
}



let books=[{Name:"khvjh",writer:"jhfk",price:50},
{Name:"gckvh",writer:"gckjh",price:30},
{Name:"hlvgkj",writer:"hlkgj",price:100},
{Name:"khfljh",writer:"hkgfh",price:140}]

books.forEach((book)=>{
console.log(book)
console.log(book.writer)
})



let nums=[6,7,8,9,10]
 let sum=0;
nums.forEach((num)=>{
    sum+=num
    
    
})
console.log(sum)


let sum1=0;
for(const numbers of nums){
   sum1+=nums
  
}  
console.log(sum)

