var express = require('express');
var router = express.Router();
var oracledb = require('oracledb');

oracledb.getConnections({
    user: '',
    password: '',
    host: '',
    database: ''
}, function(err, conn){
    if(err){
        console.log('접속 실패 : ', err);
        return;
    }
    console.log('접속 성공');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('board', {  title:   'ICEBREAKER BOARD',
                                     record_title: '글 제목',
                                     record_content: '글 내용'});

});

module.exports = router;
