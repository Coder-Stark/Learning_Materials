//THIS KEYWORD

//refer to an object, but depends on where they placed

console.log(this);            //{} global obj / window

function add(){
    let sum = 2 + 2;
    console.log(sum);        //4
    console.log(this);       //{} global obj / window
}
add();  

let data = {
    name: "Shivam",
    proff: "Software Engineer",
    country: "India",
    sum: function(){
        let add = 2 + 2;
        console.log(add);
        console.log(this);                  //placed inside object , so its refer to whole obj(not global)
        console.log(this.country);          //India
    }
}
data.sum();
/*output
4
{
  name: 'Shivam',
  proff: 'Software Engineer',
  country: 'India',
  sum: [Function: sum]
}
India
*/