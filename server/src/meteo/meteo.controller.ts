import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeteoService } from './meteo.service';
import { CreateMeteoDto } from './dto/create-meteo.dto';
import { UpdateMeteoDto } from './dto/update-meteo.dto';
import { User } from 'src/models/user.model';

@Controller('meteo')
export class MeteoController {
  constructor(private readonly meteoService: MeteoService) {}

  @Post("city")
  create(@Body() body: Pick<User, 'name'>) {
    console.log(body.name);
    return this.meteoService.meteoglo(body.name);
  }

  @Get('/:city')
  meteoglo(@Param('city') city: string): string {
    console.log(city);
    return this.meteoService.meteoglo(city);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meteoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeteoDto: UpdateMeteoDto) {
    return this.meteoService.update(+id, updateMeteoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meteoService.remove(+id);
  }
}
