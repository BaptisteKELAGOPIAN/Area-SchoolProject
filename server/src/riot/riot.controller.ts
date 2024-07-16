import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiotService } from './riot.service';
import { CreateRiotDto } from './dto/create-riot.dto';
import { UpdateRiotDto } from './dto/update-riot.dto';
import { User } from 'src/models/user.model';


@Controller('riot')
export class RiotController {
  constructor(private readonly riotService: RiotService) {}

  @Post()
  create(@Body() createRiotDto: CreateRiotDto) {
    return this.riotService.create(createRiotDto);
  }

  @Post("pseudo")
  riotParam(@Body() body: Pick<User, 'name' | 'email'>) {
    return this.riotService.riotParam(body.name, body.email);
  }


  @Get('/:pseudo/:mail')
  notionParam(@Param('pseudo') pseudo: string, @Param('mail') mail: string  ){
    return this.riotService.riotParam(pseudo, mail);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiotDto: UpdateRiotDto) {
    return this.riotService.update(+id, updateRiotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riotService.remove(+id);
  }
}
