import { Module } from '@nestjs/common';
import { ExternalNbaModule } from './external-nba/external-nba.module';

@Module({
  imports: [ExternalNbaModule],
})
export class AppModule {}
