import { Injectable } from '@nestjs/common';
import { CreateRiotDto } from './dto/create-riot.dto';
import { UpdateRiotDto } from './dto/update-riot.dto';
const axios = require("axios");

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

async function live_game(pseudo, mail) {
  var email   = require("emailjs");
  var server  = email.server.connect({
    user:    "area.mail06@gmail.com", 
    password:  "gwvuwjwzhalggvck", 
    host:    "smtp.gmail.com",
    ssl:     true
 });
  const token = "RGAPI-256d2e47-3f12-4bd5-b026-672e622d24fb";
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${pseudo}?api_key=${token}`;
  var url2: string;
  console.log(url.toString());
  var id_player : any;
  var interval2 : any;
  

  var interval = setInterval (async () => {
    let id = axios.get(url.toString()).then(function (response) {
      const json =JSON.stringify(response, getCircularReplacer());
      id_player = JSON.parse(json);
      id_player = id_player.data.id;
      console.log(id_player);
      url2 = `https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id_player}?api_key=${token}`;
      clearInterval(interval);
    }).catch(function (err) {
      console.log("Message error:  " + err.response.data.status.message + "  Code status:  " + err.response.data.status.status_code);
    }
    );  
  }, 1000);


  console.log(url2);
  
  interval2 = setInterval( async () => {
    let Ingame = axios.get(url2).then(function (response) {
        console.log("in live game");
        server.send({
          text:    `${pseudo} is in a live game !`, 
          from:    "Area Team <area.mail06@gmail.com>", 
          to:      mail,
          subject: `${pseudo} is in game`,
        }, function(err, message) { console.log(err || message); });
        clearInterval(interval2);
    }).catch(function (err) {
          console.log("no live game");
    }
    );
  }, 1000);
}

function get_summ_id(pseudo, key) {
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${pseudo}?api_key=${key}`;
  let id_player;
  // get the id of the summoner with his pseudo

  let id = axios.get(url).then(function (response) {
    id_player = response.data.id;
    // console.log(id_player);
    return id_player;
  }
  ).catch(function (err) {
    console.log(err);
  }
  );
  // console.log(id_player);
  // return id_player;
}

function check_pseudo(pseudo, mail){
  live_game(pseudo, mail);
}

@Injectable()
export class RiotService {
  create(createRiotDto: CreateRiotDto) {
    return 'This action adds a new riot';
  }

  findAll() {
    return `This action returns all riot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riot`;
  }

  update(id: number, updateRiotDto: UpdateRiotDto) {
    return `This action updates a #${id} riot`;
  }

  remove(id: number) {
    return `This action removes a #${id} riot`;
  }
  riotParam(pseudo, mail) {
    check_pseudo(pseudo, mail);
    console.log("pseudo : " + pseudo);
    console.log("email : " + mail);
  }
}
