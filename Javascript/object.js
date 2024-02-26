{
    const list = [{
        Mobile:{
            Mobile1:{
                Model: "Phone",
                Price: "40000",
            },
            Mobile2:{
                Model: "Iphone",
                Price: "14000",
            },
            Mobile3:{
                Model: "Samsung",
                Price: "10000",
            },
            Mobile4:{
                Model: "Pixel",
                Price: "80000",
            },
            Mobile5:{
                Model: "Honor",
                Price: "40000",
            }
        },
        Tour:{
            Tour1:{
                Name: "Rishikesh",
                Price: "20000",
            },
            Tour2:{
                Name: "Kashmir",
                Price: "23000",
            },
            Tour3:{
                Name: "Kerala",
                Price: "8000",
            },
            Tour4:{
                Name: "Goa",
                Price: "35000",
            },
            Tour5:{
                Name: "Vrindavan",
                Price: "12000",
            }
        },
        Treak:{
            Treak1:{
                Name: "Kedarkantha",
                Price: "18000",
            },
            Treak2:{
                Name: "Brahmatal",
                Price: "20000",
            },
            Treak3:{
                Name: "Hampta",
                Price: "13000",
            },
            Treak4:{
                Name: "Tarsar",
                Price: "8000",
            },
            Treak5:{
                Name: "NandaDevi",
                Price: "22000",
            }
        },
        Bike:{
            Bike1:{
                Model: "R18",
                Price: "$16640",
            },
            Bike2:{
                Model: "Triumph",
                Price: "$12640",
            },
            Bike3:{
                Model: "Yamaha",
                Price: "$11040",
            },
            Bike4:{
                Model: "Continental",
                Price: "$6199",
            },
            Bike5:{
                Model: "nineT",
                Price: "$16440",
            }
        },
        Car:{
            Car1:{
                Model: "Chevelle",
                Price: "$140000",
            },
            Car2:{
                Model: "Mustang",
                Price: "$391450",
            },
            Car3:{
                Model:  "Shelby",
                Price: "$328900",
            },
            Car4:{
                Model: "Blazer",
                Price: "$109945",
            },
            Car5:{
                Model: "Corvette",
                Price: "$119500",
            }
        }
    }]



    const input = prompt("Enter This Name Mobile, Tour, Treak, Bike, Car For Full List: ");
    
    if(input == "Mobile"){
        console.log("Mobile",list[0]["Mobile"]);
    }
    else if(input == "Tour"){
        console.log("Tour",list[0]["Tour"]);

    }
    else if(input == "Treak"){
        console.log("Treak",list[0]["Treak"]);

    }
    else if(input == "Bike"){
        console.log("Bike:",list[0]["Bike"]);

    }
    else if(input == "Car"){
        console.log("Car:" ,list[0]["Car"]);
    }
    else{
        console.log("Please! Refresh The Page and Enter ValidInput For Result.");
    }

}

{
    let list1 = [
        { No1: "Moto", price:"$229", category: "mobile" },
        { No2: "Apple", price:"$449", category: "mobile" },
        { No3: "Poco", price:"$109", category: "mobile" },
        { No4: "Samsung", price:"$329", category: "mobile" },
        { No5: "Pixel", price:"$389", category: "mobile" },

        { Car1: "Chevelle", price:"$140000", category: "car" },
        { Car2: "Shelby", price:"$91450", category: "car" },
        { Car3: "Mustang", price:"$328900", category: "car" },
        { Car4: "Blazer", price:"$109945", category: "car" },
        { Car5: "Corvette", price:"$119500", category: "car" },

        { Fruit1: "Strawberry", price:"$23", category: "fruit" },
        { Fruit2: "Brazil Nut", price:"$23", category: "fruit" },
        { Fruit3: "Coconut", price:"$23", category: "fruit" },
        { Fruit4: "Fig", price:"$38", category: "fruit" },
        { Fruit5: "Persimmon", price:"$89", category: "fruit" },

        { Tour1: "Rishikesh", price:"$39", category: "tour" },
        { Tour2: "Ladak", price:"$38", category: "tour" },
        { Tour3: "Spiti", price:"$89", category: "tour" },
        { Tour4: "Goa", price:"$29", category: "tour" },
        { Tour5: "Kerala", price:"$59", category: "tour" },

        { Treak1: "Kedarkantha", price:"$87", category: "treak" },
        { Treak2: "Brahmatal", price:"$56", category: "treak" },
        { Treak3: "Tarsar", price:"$47", category: "treak" },
        { Treak4: "Nandadevi", price:"$32", category: "treak" },
        { Treak5: "Hampta", price:"$23", category: "treak" }
    ]; 

    let output = prompt("Enter This Name Mobile, Tour, Treak, Fruit, Car For Full List: ");
    let output1=  list1.filter(list1 => list1.category == output);

    console.log(output1);

    // for (let i = 0; i < output.length; i++) {
    //     console.log(output1[i])
    // };
    
}

/* Create an empty object called dog */

{
    const dog = {}

    console.log("dog" , dog);
}

/* Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof */

{
    const dog1 = {
        name: "Dreak",
        breed: "Husk",
        weight: "15kg",
        bark:  "woof woof!"
    }
        console.log(dog1.name + " say " + dog1.bark)
}