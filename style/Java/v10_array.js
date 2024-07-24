const array=[1,2,3,4,5,6,7,8,9];
console.log(num[num.length-1])

//Push
num.push(10)
console.log(num.push(10))

//unshift
console.log(num.unshift(0))

//same process we can write pop and shift
// how we can change index value
 num[0]={num:80}
 console.log(num)
  //for string
  let names=['sd','ap','sp'];
  //indexOf
  names.indexOf('sd');
  console.log(names.indexOf('sd',3))
  ///last index of
  names.lastIndexOf('sd')
  console.log(names.indexOf('sd'))
  //incldes
  names.includes('sd')
  console.log(names.indexOf('sd'))

  //concatinate
  let nm=['sd','ap','sp']
  let nm1=['sq','ad','ag']
  console.log(nm.concat(nm1))

  //use for loop
   for(let i=0;i<names.length;i++){
    console.log(names[i])
   }
 //for each
 names.forEach(fucntion(names,index));{

 }
 //join
 let stu=['s','r','e']
 student=student.join(' ');
  //spilt
  console.log(student.spilt(' '))

  //usr filter
   
  let cities=[
    {name:'Mumbai',population:123412},
    {name:'Kolkata',population:523412},
    {name:'Delhi',population:923412}

  ];
  console.log(cities.filter(city=> {return city.population >20000}))

  //map method
  console.log(cities.map(city=> {return city.population >20000}))

  
