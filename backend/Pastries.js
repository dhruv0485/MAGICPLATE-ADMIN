const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const Pastries = require('../backend/models/PastriesSchema'); 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));  
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));  
    }
});

const upload = multer({ storage: storage });


router.post('/addPastries', upload.single('image'), async (req, res) => {
    const { name, description, price } = req.body;  
    const imagePath = req.file ? req.file.filename : null;  

 
    if (!imagePath) {
        return res.status(400).json({ message: "Image upload is required" });
    }

    try {
       
        const newPastries = new Pastries({
            name,
            description,
            price,
            image: imagePath  
        });

        await newPastries.save();
        res.status(201).json({ message: "Product added successfully", pastries: newPastries });
    } catch (error) {
        res.status(500).json({ message: "Product added unsuccessfully", error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const pastries = await Pastries.find(); 
        res.status(200).json(pastries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Pastries', error: error.message });
    }
});

module.exports = router;
