const character=[
    {
      name:"Soumi Dey",
      heigfht:"160",
      mass:'12',
      gender:"Female"
   },
   {
    name:"Shivam Dey",
    heigfht:"160",
    mass:'12',
    gender:"Male"
 },

];

//get an array of all names

const names=character.map(ch=>ch.name)
console.log(names);
//get an array of obj with just and height properties

const propertiesOfCh=character.map(ch=>{
    return{
        name:ch.name,
        height:ch.height
    }
}
    )
    console.log(propertiesOfCh)

    //get char with mass greater than 100

       const totalHeight=character.reduuce((prevHeight,character))