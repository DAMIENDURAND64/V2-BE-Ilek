import { Module } from '@nestjs/common';
import { MitigationQuestionsController } from './mitigation_questions.controller';
import { MitigationQuestionsService } from './mitigation_questions.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MitigationQuestionsController],
  providers: [MitigationQuestionsService],
})
export class MitigationQuestionsModule {}
