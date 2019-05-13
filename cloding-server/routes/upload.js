const uploadCloud = require('../config/cloudinary.js');
const multer = require("multer");
const router = express.Router();

router.post('/urlOnly', uploadCloud.single('picture'), (req, res, next) => {
    res.status(200).json({ message: 'upload' })
})