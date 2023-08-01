import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentQuestionsModule } from './environment_questions/environment_questions.module';
import { PrismaModule } from './prisma/prisma.module';
import { MitigationQuestionsModule } from './mitigation_questions/mitigation_questions.module';

@Module({
  imports: [
    EnvironmentQuestionsModule,
    PrismaModule,
    MitigationQuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
