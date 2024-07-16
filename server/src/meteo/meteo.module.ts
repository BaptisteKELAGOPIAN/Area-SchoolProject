import { Module } from '@nestjs/common';
import { MeteoService } from './meteo.service';
import { MeteoController } from './meteo.controller';

@Module({
  controllers: [MeteoController],
  providers: [MeteoService]
})
export class MeteoModule {}
