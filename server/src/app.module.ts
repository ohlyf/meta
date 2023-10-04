import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: '章三',
        age: 20,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'aaa',
          desc: 'ccc',
        };
      },
    },
    {
      provide: 'person3',
      async useFactory(person: { name: string }, appService: AppService) {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
  ],
})
export class AppModule {}
