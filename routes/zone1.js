var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/',(req, res, next) => {
      
	res.render('Zone1/index');
        
});
	
	
 
module.exports = router;