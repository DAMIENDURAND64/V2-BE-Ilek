import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  AnswersResponseDto,
  QuestionsResponseDto,
} from 'src/environment_questions/dto/questions.dto';
import {
  CheckAnswersDto,
  CorrectAnswerDto,
} from 'src/environment_questions/dto/answers.dto';

export enum PrismaTypes {
  ENVIRONMENT = 'environment',
  MITIGATION = 'mitigation',
}

@Injectable()
export class BaseQuestionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getQuestions(
    questionType: PrismaTypes,
  ): Promise<QuestionsResponseDto[]> {
    const questions = await this.prismaService[
      questionType + 'Question'
    ].findMany({
      include: {
        answers: true,
      },
    });

    const randomQuestions = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestions.push(questions[randomIndex]);
      questions.splice(randomIndex, 1);
    }

    return randomQuestions.map((question) => {
      return new QuestionsResponseDto({
        id: question.id,
        question: question.question,
        answers: question.answers.map(
          (answer) => new AnswersResponseDto(answer),
        ),
      });
    });
  }

  async checkAnswers(
    questionType: PrismaTypes,
    answers: CheckAnswersDto[],
  ): Promise<CorrectAnswerDto> {
    const questions = await this.prismaService[
      questionType + 'Answer'
    ].findMany({
      include: {
        answers: true,
      },
    });

    if (answers.length !== 5)
      throw new NotFoundException('You must answer all questions');

    let correctAnswers = 0;
    for (const givenAnswer of answers) {
      const question = questions.find(
        (question) => question.id === givenAnswer.questionId,
      );

      if (!question) throw new NotFoundException("Question doesn't exist");

      const correctAnswer = question.answers.find((answer) => answer.isCorrect);
      if (correctAnswer.answer === givenAnswer.answer) {
        correctAnswers++;
      }
    }

    return { correctAnswers };
  }
}
