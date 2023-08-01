import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentQuestionsController } from './environment_questions.controller';

describe('EnvironmentQuestionsController', () => {
  let controller: EnvironmentQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentQuestionsController],
    }).compile();

    controller = module.get<EnvironmentQuestionsController>(
      EnvironmentQuestionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
