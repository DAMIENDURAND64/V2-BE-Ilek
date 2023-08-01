import { PrismaTypes } from './../globalQuestions/base_questions.service';
import { CheckAnswersDto, CorrectAnswerDto } from './dto/answers.dto';
import { QuestionsResponseDto } from './dto/questions.dto';
import { EnvironmentQuestionsService } from './environment_questions.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class EnvironmentQuestionsController {
  constructor(
    private readonly environmentQuestionsService: EnvironmentQuestionsService,
  ) {}

  @Get('environment_questions')
  getEnvironmentQuestions(): Promise<QuestionsResponseDto[]> {
    return this.environmentQuestionsService.getQuestions();
  }

  @Post('check_answers_environment')
  checkAnswersEnvironment(
    @Body()
    answers: CheckAnswersDto[],
  ): Promise<CorrectAnswerDto> {
    return this.environmentQuestionsService.checkAnswers(
      PrismaTypes.ENVIRONMENT,
      answers,
    );
  }
}
