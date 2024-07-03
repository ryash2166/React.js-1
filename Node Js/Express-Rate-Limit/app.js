// Express is node framework that helps 
// in setting up the server and routing. 
const express = require("express"); 

// The express-rate-limit is for 
// limiting the incoming request. 
const rateLimit = require("express-rate-limit"); 

// App variable store the express module. 
const app = express(); 

// Creating a limiter by calling rateLimit function with options: 
// max contains the maximum number of request and windowMs 
// contains the time in millisecond so only max amount of 
// request can be made in windowMS time. 
const limiter = rateLimit({ 
	max: 100, 
	windowMs: 60 * 60 * 1000, 
	message: "Too many request from this IP"
}); 

// Add the limiter function to the express middleware 
// so that every request coming from user passes 
// through this middleware. 
app.use(limiter); 

// GET route to handle the request coming from user 
app.get("/", (req, res) => { 
	res.status(200).json({ 
		status: "success", 
		message: "Hello from the express server"
	}); 
}); 

// Server Setup 
const port = 8000; 
app.listen(port, () => { 
	console.log(`app is running on port ${port}`); 
});
