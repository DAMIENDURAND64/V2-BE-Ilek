import { QuestionsResponseDto } from './dto/questions.dto';
import { Injectable } from '@nestjs/common';
import { CheckAnswersDto, CorrectAnswerDto } from './dto/answers.dto';
import {
  BaseQuestionsService,
  PrismaTypes,
} from 'src/globalQuestions/base_questions.service';

@Injectable()
export class EnvironmentQuestionsService extends BaseQuestionsService {
  getQuestions(): Promise<QuestionsResponseDto[]> {
    return super.getQuestions(PrismaTypes.ENVIRONMENT);
  }

  checkAnswers(
    questionType: PrismaTypes.ENVIRONMENT,
    answers: CheckAnswersDto[],
  ): Promise<CorrectAnswerDto> {
    return super.checkAnswers(questionType, answers);
  }
}
