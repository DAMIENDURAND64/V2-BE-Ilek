import { QuestionsResponseDto } from '../environment_questions/dto/questions.dto';
import { Injectable } from '@nestjs/common';
import {
  CheckAnswersDto,
  CorrectAnswerDto,
} from '../environment_questions/dto/answers.dto';
import {
  BaseQuestionsService,
  PrismaTypes,
} from 'src/globalQuestions/base_questions.service';

@Injectable()
export class MitigationQuestionsService extends BaseQuestionsService {
  getQuestions(): Promise<QuestionsResponseDto[]> {
    return super.getQuestions(PrismaTypes.MITIGATION);
  }

  checkAnswers(
    questionType: PrismaTypes.MITIGATION,
    answers: CheckAnswersDto[],
  ): Promise<CorrectAnswerDto> {
    return super.checkAnswers(questionType, answers);
  }
}
