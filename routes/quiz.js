var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/QUIZ1')

/*CREATE Quiz*/
router.post('/CreateQuiz',CONTROL.CreateQuiz);

/*GET ALL Quiz*/
router.get('/GetAllQuiz',CONTROL.GetAllQuizzes);

/*GET SINGLE Quiz*/
router.get('/GetSingleQuiz/:id',CONTROL.GetSingleQuizzes);

/*UPDATE Quiz*/
router.patch('/UpdateQuiz/:id',CONTROL.UpdateQuizzes);

/*DELETE Quiz*/
router.delete('/DeleteQuiz/:id',CONTROL.DeleteQuizzes);

module.exports = router;