import { Test, TestingModule } from '@nestjs/testing';
import { MitigationQuestionsController } from './mitigation_questions.controller';

describe('MitigationQuestionsController', () => {
  let controller: MitigationQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MitigationQuestionsController],
    }).compile();

    controller = module.get<MitigationQuestionsController>(
      MitigationQuestionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
