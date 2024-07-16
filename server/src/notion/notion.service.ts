import { Injectable } from '@nestjs/common';
import { CreateNotionDto } from './dto/create-notion.dto';
import { UpdateNotionDto } from './dto/update-notion.dto';

function Discordsend(nb, key, blockid) {
  const axios = require("axios")
  const { Client } = require('@notionhq/client');
  const notion = new Client({ auth: key });
  function core_discord(nb, blockid) {

    (async () => {
      const response = await notion.comments.list({ block_id: blockid });
      let embeds = [
        {
          title: "Ur last comment on Notion",
          color: 5174599,
          footer: {
            text: `📅 ${(response.results[(nb-1)].rich_text[0].plain_text)}`,
          },
        },
      ];
    let data = JSON.stringify({ embeds });
    var config = {
      method: "POST",
      url: "https://discord.com/api/webhooks/1034763900324945940/0E--A4vnxpa3OmlgTVLo9UPLNAsj7otcVQMzxFr1SnQqDwLI8IYT0kSdlcb2oT873x_G",
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    axios(config)
      .then((response) => {
          return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
    });
      return (response.results[(nb-1)].rich_text[0].plain_text);
    })();
  }
  core_discord(nb, blockid)
}

function countProperties(obj) {
  var count = 0;

  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          ++count;
  }

  return count;
}

async function nb_comment(key, blockid) {
  const { Client } = require('@notionhq/client');
  const notion = new Client({ auth: key});
  const response = await notion.comments.list({ block_id: blockid });
  return (countProperties(response.results));
}

function saveNbComment(key, blockid){
  var fs = require('fs');
  nb_comment(key, blockid).then((result)=>{
    var nb = result.toString()
    fs.writeFile("Nb-c.txt", nb, function (err) {
      if (err) throw err;
    });
  });
}

async function mytest(key, blockid) {
  const fs = require('fs');
  nb_comment(key, blockid).then((result)=>{
    fs.readFile('Nb-c.txt', 'utf8', function(err, data) {
      if (err) throw err;
      if (result != data){
          notionComment(result, key, blockid);
          Discordsend(result, key, blockid);
          saveNbComment(key, blockid);
      }
  });
  }); 
}

function notionComment(nb, key, blockid) {
  const { Client } = require('@notionhq/client');
  const notion = new Client({ auth: key });
  (async () => {
  const response = await notion.comments.list({ block_id: blockid });
  console.log(response.results[(nb-1)].rich_text[0].plain_text);
  return (response.results[(nb-1)].rich_text[0].plain_text);
  })();
}

function glo(key, blockid) {
  saveNbComment(key, blockid);
  setInterval(mytest, 3000, key, blockid);
}

@Injectable()
export class NotionService {
  create(createNotionDto: CreateNotionDto) {
    return 'This action adds a new notion';
  }

  findAll() {
    return `This action returns all notion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notion`;
  }

  update(id: number, updateNotionDto: UpdateNotionDto) {
    return `This action updates a #${id} notion`;
  }

  remove(id: number) {
    return `This action removes a #${id} notion`;
  }
  notionParam(key: string, blockid: string) {
    glo(key, blockid);
    return `Hello!`;
  }
}
