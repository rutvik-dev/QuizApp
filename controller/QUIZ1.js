const Quiz = require('../model/QUIZ');

// Create Quiz
let CreateQuiz = async function (req, res, next) {
    try {
        const { title, questions, userId } = req.body;


        const createquiz = await Quiz.create({ title, questions, userId });

        res.status(201).json({
            status: "success",
            message: 'Quiz Create Successfully',
            Data: createquiz
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Get All Quizzes
let GetAllQuizzes = async function (req, res, next) {
    try {
        const quizzes = await Quiz.find().populate('userId')

        res.status(201).json({
            status: "success",
            message: 'Get All Quizzes Successfully',
            Data: quizzes
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Get Single Quiz by ID
let GetSingleQuizzes = async function (req, res, next) {
    try {
        const quiz = await Quiz.findById(req.params.id).populate('userId');
        if (!quiz) {
            return res.status(404).json({ msg: 'Quiz not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'Get Single Quizze Successfully',
            Data: quiz
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Update Quiz By Id
let UpdateQuizzes = async function (req, res, next) {
    try {
        id = req.params.id
        console.log(id);
        const updatequizze = await Quiz.findByIdAndUpdate(id, req.body, { new: true }).populate('userId')
        if (!updatequizze) {
            return res.status(404).json({ msg: 'Quiz not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'Update Quizze Successfully',
            Data: updatequizze
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Delete Quiz
let DeleteQuizzes = async function (req, res, next) {
    try {
        id = req.params.id
        const deletequizze = await Quiz.findByIdAndDelete(id)
        if (!deletequizze) {
            return res.status(404).json({ msg: 'Quiz not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'Delete Quizze Successfully',
            Data: deletequizze
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


module.exports = { CreateQuiz, GetAllQuizzes, GetSingleQuizzes, UpdateQuizzes, DeleteQuizzes }


