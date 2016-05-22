var express = require('express');
var router = express.Router();
//var multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Upload Service' });
});

// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './public/uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname);
//   }
// });

// var upload = multer({ storage : storage }).single('newFile');

// router.post('/',function(req, res, next) {

// 	upload(req,res,function(err){

// 		if(err) {
//             return res.end("Error uploading file.");
//         }
//         console.log(req.files);
// 	});
// });

module.exports = router;
