import { PrismaModule } from './../prisma/prisma.module';
import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { EnvironmentQuestionsController } from './environment_questions.controller';
import { EnvironmentQuestionsService } from './environment_questions.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
  controllers: [EnvironmentQuestionsController],
  providers: [
    EnvironmentQuestionsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class EnvironmentQuestionsModule {}
