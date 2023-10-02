export interface IQuizState {
	activeQuizId: number
	quizzes: IQuiz[]
}

export interface IQuiz {
	id: number
	currentQuestionId: number
	title: string
	description: string
	questions: IQuestion[]
}

export interface IQuestion {
	id: number
	text: string
	correctAnswerId: number
	answers: IAnswer[]
}

export interface IAnswer {
	id: number
	text: string
}