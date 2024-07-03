const path = require('path')
const express = require('express');
const multer = require('multer');

const app = express()
const PORT = 5000 ;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}` )
    }
  })

const upload = multer({ storage })

app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))

app.use(express.urlencoded({ extended: false }))

app.get('/' ,(req,res) => {
    return res.render('homepage')
})

app.post('/upload' , upload.single('ProfileImage') , (req,res)=> {
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/')

})

app.listen(PORT , () => console.log('Server Run in Port 5000'))