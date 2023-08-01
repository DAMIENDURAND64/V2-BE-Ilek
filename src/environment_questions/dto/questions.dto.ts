import { Exclude, Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

export class QuestionsResponseDto {
  id: number;

  @IsString()
  question: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswersResponseDto)
  answers: AnswersResponseDto[];

  constructor(partial: Partial<QuestionsResponseDto>) {
    Object.assign(this, partial);
  }
}

export class AnswersResponseDto {
  id: number;

  @IsString()
  answer: string;

  @Exclude()
  isCorrect: boolean;

  @Exclude()
  questionId: number;

  constructor(partial: Partial<AnswersResponseDto>) {
    Object.assign(this, partial);
  }
}
