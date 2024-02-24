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
        console.log("Please! Refresh The Page and Enter Valid Input For Result.");
    }
}