import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CheckAnswersDto {
  @IsNumber()
  @IsNotEmpty()
  questionId: number;

  @IsString()
  @IsNotEmpty()
  answer: string;

  constructor(partial: Partial<CheckAnswersDto>) {
    Object.assign(this, partial);
  }
}

export class CorrectAnswerDto {
  correctAnswers: number;
}
