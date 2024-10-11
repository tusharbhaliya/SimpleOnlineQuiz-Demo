const express = require("express");
const router = express.Router();
const { authMiddleware, adminMiddleware } = require("../middleware/Auth");
const { createQuiz, updateQuiz, deleteQuiz, getAllQuizzes, getQuizById, attemptQuiz, getUserAttempts, getAdminQuizes, getQuizAttempts } = require("../controllers/quizController");
const { createQuestion, updateQuestion, deleteQuestion, getQuizQuestions } = require("../controllers/questionController");
const { login, register } = require("../controllers/userController");

router.post("/login", login);
router.post("/register", register);

router.get("/admin-quizzes", authMiddleware, adminMiddleware, getAdminQuizes);
router.get("/attempts/:id", authMiddleware, adminMiddleware, getQuizAttempts);
router.post("/quizzes", authMiddleware, adminMiddleware, createQuiz);
router.put("/quizzes/:id", authMiddleware, adminMiddleware, updateQuiz);
router.delete("/quizzes/:id", authMiddleware, adminMiddleware, deleteQuiz);

router.get("/questions/:id", authMiddleware, getQuizQuestions);
router.post("/questions", authMiddleware, adminMiddleware, createQuestion);
router.put("/questions/:id", authMiddleware, adminMiddleware, updateQuestion);
router.delete( "/questions/:id", authMiddleware, adminMiddleware, deleteQuestion );
router.get("/quizzes", authMiddleware, getAllQuizzes);
router.get("/quizzes/:id", authMiddleware, getQuizById);
router.post("/quizzes/:id/attempt", authMiddleware, attemptQuiz);
router.get("/attempts", authMiddleware, getUserAttempts);

module.exports = router;
