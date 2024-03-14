/* This Use */

// let max = this;
// console.log(max);

// this.name = "Hello World"

// console.log(this.name);

/* Inner Function */

// function grow() {
//     console.log(this);
// }
// grow()

/* Constructor Function */

    // function grow() {
    //     this.name = "Skill"
    //     console.log(name);
    // }

    // let obj = new grow()

    // console.log(obj);

/* this Keyword in Arrow Function */

// const func = () => {
//     console.log(this);
// }

// func()

// const Obj = () =>{
//   this.name = 'JQuery'
//   console.log(name);
// }

// Obj();

/* Function.Length Method */

// function greet() {
    
// }
// console.log(greet.length);

// function geeta(a , b , c) {
    
// }
// console.log(geeta.length);

// function geeta1(a = 10 , b , c) {
    
// }
// console.log(geeta1.length);

// function geeta2(a , b = 10 , c) {
    
// }
// console.log(geeta2.length);

// function geeta3(a , b , c = 10) {
    
// }
// console.log(geeta3.length);

/* Function.toString Method */

// function greet1(){
//   console.log('SkillQode');
// }


// console.log(greet1.toString());

// console.log(() => console.log('data').toString());

/* Function.Name Method */

// function greet(){

// }

// console.log(greet.name);

/* this Inside Inner Function */

{
//   const person = {
//     name : 'Jack',
//     age: 25,
//     greet() {

//         console.log(this);        
//         console.log(this.age);  

//         const innerFun = () => {
//             console.log(this);       
//             console.log(this.age); 
//         }

//         innerFun();
//     }
// }

// person.greet();

}

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   getThis : function() {
//     return this;
//   }
// };

// console.log('this in object method', person.getThis());

{
    // function getThis() {
    //   return this;
    // }
    
    // const obj1 = { name: "obj1" };
    // const obj2 = { name: "obj2" };
    
    // obj1.getThis = getThis;
    // obj2.getThis = getThis;
    
    // console.log(obj1.getThis()); 
    // console.log(obj2.getThis());
    
    // console.log(obj1);
}

/* Function Apply() Method */

{
    const obj = {
        name : 'ED',
        surname : 'Sheeran'
    }

    function grammy(wish , message) {
        return `${this.name} ${this.surname} , ${wish} ${message}`;
    }
    const wish = grammy.apply(obj , ["Congratulations" , "to win Grammy Award."]);

    console.log(wish);
}