import { Module } from '@nestjs/common';
import { ExternalNbaService } from './external-nba.service';
import { ExternalNbaController } from './external-nba.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [ExternalNbaService],
  controllers: [ExternalNbaController],
  imports: [HttpModule]
})
export class ExternalNbaModule {}
