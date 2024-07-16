import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GithubService } from './github.service';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
import { IdTokenResult } from 'firebase/auth';
import { User } from 'src/models/user.model';


@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post("commit")
   async ActionReac_Commit(@Body() body: Pick<User, 'email' | 'password' | 'name'>) {
    return await this.githubService.ActionReac_Commit(body.email, body.password, body.name);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.githubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGithubDto: UpdateGithubDto) {
    return this.githubService.update(+id, updateGithubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.githubService.remove(+id);
  }
}
