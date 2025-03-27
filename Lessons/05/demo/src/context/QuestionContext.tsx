import { createContext } from "react"

export interface QuestionContextType {
  question: string
  answers: string[]
  correctAnswerIndex: number
}

export const QuestionContext = createContext<QuestionContextType | undefined>(
  {} as QuestionContextType
)
