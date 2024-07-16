import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotionService } from './notion.service';
import { CreateNotionDto } from './dto/create-notion.dto';
import { UpdateNotionDto } from './dto/update-notion.dto';
import { User } from 'src/models/user.model';


@Controller('notion')
export class NotionController {
  constructor(private readonly notionService: NotionService) {}

  @Get('/:key/:blockid')
  notionParam(@Param('key') key: string, @Param('blockid') blockid: string ): string {
    return this.notionService.notionParam(key, blockid);
  }

  @Post("comment")
  create(@Body() body: Pick<User, 'name' | 'id'>) {
    console.log(body.name, body.id);
    return this.notionService.notionParam(body.name, body.id);
  }

  @Post()
  findAll() {
    return this.notionService.findAll();
  }

  @Post(':id')
  findOne(@Param('id') id: string) {
    return this.notionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotionDto: UpdateNotionDto) {
    return this.notionService.update(+id, updateNotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notionService.remove(+id);
  }
}
