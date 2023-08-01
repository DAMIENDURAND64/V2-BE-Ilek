import { PrismaTypes } from './../globalQuestions/base_questions.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  CheckAnswersDto,
  CorrectAnswerDto,
} from 'src/environment_questions/dto/answers.dto';
import { QuestionsResponseDto } from 'src/environment_questions/dto/questions.dto';
import { MitigationQuestionsService } from './mitigation_questions.service';

@Controller()
export class MitigationQuestionsController {
  constructor(
    private readonly mitigationQuestionsService: MitigationQuestionsService,
  ) {}

  @Get('mitigation_questions')
  getMitigationQuestions(): Promise<QuestionsResponseDto[]> {
    return this.mitigationQuestionsService.getQuestions();
  }

  @Post('check_answers_mitigation')
  checkAnswersMitigation(
    @Body()
    answers: CheckAnswersDto[],
  ): Promise<CorrectAnswerDto> {
    return this.mitigationQuestionsService.checkAnswers(
      PrismaTypes.MITIGATION,
      answers,
    );
  }
}
