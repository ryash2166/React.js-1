// Declare an empty Array

{
    let empty = []
    console.log(empty);
}

// declare an array with more than 5 number of elements in javascript

{
    let num5 = [1 , 2 , 3 , 4 , 5 , 6]
    console.log(num5);
}

// Find the length of your array

{
    let num = [1 , 2 , 3 , 4 , 5 , 6]
    console.log(num.length);
}

// Get the first item, the middle item and the last item of the array

{
    let num = [1 , 2 , 3 , 4 , 5 , 6]
    let num2 = num.shift(0);
    let num3 = num.pop();
    console.log(num2);
    console.log(num3);
}

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

{
    let arry = [1 , "A"  , 2.12 , 'Array' , true , false]
    console.log(arry);
}

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    console.log(itCompanies);
}

// Print the array using console.log()

{
    console.log(Array(1,2,3));
}

// Print the number of companies in the array

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    console.log("Number of companies in array: ", itCompanies.length);
}

// Print the first company, middle and last company

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    console.log("First Company: ", itCompanies[0]);
    console.log("Middle Company: ", itCompanies[Math.floor(itCompanies.length/2)]);
    console.log("Last Company: ",itCompanies[itCompanies.length-1]);
}

// Change each company name to uppercase one by one and print them out

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    let itCompanies1 = itCompanies.map(element => {
            return element.toUpperCase(); 
        })
    console.log(itCompanies1);
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    console.log(itCompanies.toString() , "are big IT companies.");
}

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    let input = "SpaceX";

    if(itCompanies.includes(input)){
        console.log(input);
    }
    else{
        console.log(input , "company is not found.");
    }
}

// Filter out companies which have more than one 'o' without the filter method

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]

    for(i=0 ; i < itCompanies.length ; i++){
        if(itCompanies[i].includes('o')){
            console.log(itCompanies[i]);
        }
    }
}

// Sort the array using sort() method

{
    let players = ["Virat" , "Rohit" , "Thala" , "Aaron" , "Bairstow"]
    let sort = players.sort();

    console.log(sort);
}

// Reverse the array using reverse() method

{
    let players = ["Virat" , "Rohit" , "Thala" , "Aaron" , "Bairstow"]
    let reverse = players.reverse();

    console.log(reverse); 
}

// Slice out the first and last 3 companies from the array

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]

    console.log("The First 3 Companies : " , itCompanies.slice(0 , 3));

    console.log("The Last 3 Companies : " , itCompanies.slice(4));
}

// Slice out the middle IT company or companies from the array

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    let middle = Math.floor(itCompanies.length/2);
    console.log("The Middle Companies: " , itCompanies.slice(middle,middle+1));
}

// Remove the first IT company from the array

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    let itCompanies1 = itCompanies.splice(0 , 1);

    console.log("Remove Element is" , itCompanies1);
    console.log(itCompanies);

}

// Remove the middle IT company or companies from the array

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]

    let middle = Math.floor(itCompanies.length/2);
    console.log("The Middle Companies: " , itCompanies.splice(middle, 1));
    console.log(itCompanies);
}

// Remove the last IT company from the array

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]

    console.log("Last element: ", itCompanies.splice(itCompanies.length-1 , 1) );
    console.log(itCompanies);
}

// Remove all IT companies

{
    let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"]
    
    console.log("Remove All Element: " , itCompanies.splice(0 , itCompanies.length));
    console.log(itCompanies);
}
