import { Injectable } from '@nestjs/common';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
const { Octokit } = require("octokit");
//import emailjs

import { stringify } from 'querystring';


@Injectable()
export class GithubService {
  create(createGithubDto: CreateGithubDto) {
    return 'This action adds a new github';
  }

  async ActionReac_Commit(token: string, repository: string, mail: string) {

    var email   = require("emailjs");

    var server  = email.server.connect({
       user:    "area.mail06@gmail.com", 
       password:  "gwvuwjwzhalggvck", 
       host:    "smtp.gmail.com",
       ssl:     true
    });

    const octokit = new Octokit({ 
      auth: token,
    });

    const user = await octokit.request("GET /user");
    var i: 0;
    var lastCommit: any;

    setInterval(async () => {

      const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: user.data.login,
        repo: repository,
      });

      console.log(data[0].commit.message);
      if (i == 0) {
      lastCommit = data[0].commit.message;
      i: 1;
      }
      if (lastCommit === data[0].commit.message) {
        console.log("The last commit is the same as the current commit");
      } else {
        console.log("The last commit is not the same as the current commit");
        lastCommit = data[0].commit.message;
        server.send({
          text:    lastCommit, 
          from:    "Area Team <area.mail06@gmail.com>", 
          to:      mail,
          subject: "There is a new commit on " + repository,
       }, function(err, message) { console.log(err || message); });
           
      }
    }, 1000);

  }

  findAll() {
    return `This action returns all github`;
  }

  findOne(id: number) {
    return `This action returns a #${id} github`;
  }

  update(id: number, updateGithubDto: UpdateGithubDto) {
    return `This action updates a #${id} github`;
  }

  remove(id: number) {
    return `This action removes a #${id} github`;
  }
}
