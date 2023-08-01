import { Test, TestingModule } from '@nestjs/testing';
import { MitigationQuestionsService } from './mitigation_questions.service';

describe('MitigationQuestionsService', () => {
  let service: MitigationQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MitigationQuestionsService],
    }).compile();

    service = module.get<MitigationQuestionsService>(
      MitigationQuestionsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
