const mongoose = require('mongoose')

const uri = "mongodb+srv://rakholiyayash10:Y@sh@2166@cluster0.nmwqyg1.mongodb.net/shop?appName=Cluster0";

mongoose.connect(uri)

// Create a Schema 

const productsSchema = new mongoose.Schema({
        name: String,
        company: String,
        price: Number,
        colors: [String],
        image: String,
        category: String,
        isFeatured: Boolean
})


// Create an Model

const Product = new mongoose.model('Product' , productsSchema)

const data1 = {
    name: "Handle",
    company: "@#@424242434",
    price: 1244,
    colors: ["#000000", "#060606",],
    image: "/image/product-image.png",
    category: "@#!#24454542323",
    isFeatured: true, 
}

const main = async () => {
    try {
        const data = await Product.find({name:{$eq:'Handle'}})
        console.log(data);

        //Insert Data

        await Product.insertMany(data1)

    } catch (error) {
        console.log(error);
    }finally{
        mongoose.connection.close()
    }
}

main()