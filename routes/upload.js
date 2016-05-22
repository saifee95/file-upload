var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage }).single('newFile');

router.post('/',function(req, res, next) {

	upload(req,res,function(err){

		if(err) {
            return res.end("Error uploading file.");
        }

        var fileDetails = {
        	fileName: req.file.originalname,
        	fileSize: req.file.size,
        	Date: new Date().toLocaleString(),
        	newName: req.file.filename
      	};

      	res.send(fileDetails);
	});
});

module.exports = router;
