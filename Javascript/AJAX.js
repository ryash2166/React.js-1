/*Ajax XML Calling */

{
    // function load() {
    //     var xml = new XMLHttpRequest();
    
    //     xml.onreadystatechange = function () {
    //         if(this.readyState == 4 && this.status == 200){
    //             document.getElementById("demo").innerHTML = this.responseText;
    //             console.log(this.responseText);
    //         } else if(this.readyState == 4 && this.status == 404){
    //             document.getElementById("demo").innerHTML = 'File Not Found';
    //             console.log("File Not Found")
    //         }
    //     }
    
    //     xml.open('GET','https://jsonplaceholder.typicode.com/posts/1',true);
    //     xml.send();
    
    //     console.log("End of Ajax!");
    // }
}


/* Javascript async and Await Keywords */

/* Syntax */
{
    // async function data() {
    //     console.log("A");
    // }
    
    // data()
}

/* Method 1 */
{
    async function data1() {
        console.log("B : Message");
    //   await  console.log("C : Message");
        const response = await fetch("JSON/json1.json");

        console.log("D : Message");

        const student = await response.json()

        return student;
    }

    console.log("A : Message");
    let a = data1();
    console.log("E : Message");
    console.log(a);
}

/* Method 2 */
{
    // async function data1() {
        
    //     const response = await fetch("JSON/json1.json");
    //     const student = await response.json()

    //     return student;
    // }

    //     data1().then( (res) => {
    //         console.log(res);
    //     }).catch( (error) => {
    //         console.log(error);
    //     });
}

/* Method 3 */
{
    // async function data1() {
        
    //     // const response = await fetch("JSON/json1.json");
    //     // const student = await response.json()

    //     return (await fetch("JSON/json1.json")).json();
    // }

    //     data1().then( (res) => {
    //         console.log(res);
    //     }).catch( (error) => {
    //         console.log(error);
    //     });
}

/* Method 4 */
{
    // async function data1() {
    //     try{
    //         const response = await fetch("JSON/json1.json");
    //         const student = await response.json()

    //         return student;
    //     }catch(error){
    //         console.log(error);
    //     }

    // }

    //     data1().then( (res) => {
    //         console.log(res);
    //     })
}

/* Method 5 */

{
    // let pro = new Promise(function(reslove , reject){
    //     setTimeout(
    //         function() {
    //         reslove("Promise Reslove")
    //     }, 2000);
    // })

    // //Async Function

    // async function async() {
    //     let result = await pro;
    //     console.log(result);
    //     console.log("Hello");
    // }
    // async()
}

/* Method 6 without await*/

{
    // let pro = new Promise(function(reslove , reject){
    //     setTimeout(
    //         function() {
    //         reslove("Promise Reslove")
    //     }, 4000);
    // })

    // //Async Function

    // async function async() {
    //     let result = pro;
    //     console.log(result);
    //     console.log("Hello");
    // }
    // async()
}