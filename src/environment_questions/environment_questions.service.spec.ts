import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentQuestionsService } from './environment_questions.service';

describe('EnvironmentQuestionsService', () => {
  let service: EnvironmentQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentQuestionsService],
    }).compile();

    service = module.get<EnvironmentQuestionsService>(
      EnvironmentQuestionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
