"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotService = void 0;
const common_1 = require("@nestjs/common");
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
    var email = require("emailjs");
    var server = email.server.connect({
        user: "area.mail06@gmail.com",
        password: "gwvuwjwzhalggvck",
        host: "smtp.gmail.com",
        ssl: true
    });
    const token = "RGAPI-fa3084c3-4513-408d-96a2-3d7b2e3f535d";
    const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${pseudo}?api_key=${token}`;
    var url2;
    console.log(url.toString());
    var id_player;
    var interval2;
    var interval = setInterval(async () => {
        let id = axios.get(url.toString()).then(function (response) {
            const json = JSON.stringify(response, getCircularReplacer());
            id_player = JSON.parse(json);
            id_player = id_player.data.id;
            console.log(id_player);
            url2 = `https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id_player}?api_key=${token}`;
            clearInterval(interval);
        }).catch(function (err) {
            console.log("Message error:  " + err.response.data.status.message + "  Code status:  " + err.response.data.status.status_code);
        });
    }, 1000);
    console.log(url2);
    interval2 = setInterval(async () => {
        let Ingame = axios.get(url2).then(function (response) {
            console.log("in live game");
            server.send({
                text: `${pseudo} is in a live game !`,
                from: "Area Team <area.mail06@gmail.com>",
                to: mail,
                subject: `${pseudo} is in game`,
            }, function (err, message) { console.log(err || message); });
            clearInterval(interval2);
        }).catch(function (err) {
            console.log("no live game");
        });
    }, 1000);
}
function get_summ_id(pseudo, key) {
    const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${pseudo}?api_key=${key}`;
    let id_player;
    let id = axios.get(url).then(function (response) {
        id_player = response.data.id;
        return id_player;
    }).catch(function (err) {
        console.log(err);
    });
}
function check_pseudo(pseudo, mail) {
    live_game(pseudo, mail);
}
let RiotService = class RiotService {
    create(createRiotDto) {
        return 'This action adds a new riot';
    }
    findAll() {
        return `This action returns all riot`;
    }
    findOne(id) {
        return `This action returns a #${id} riot`;
    }
    update(id, updateRiotDto) {
        return `This action updates a #${id} riot`;
    }
    remove(id) {
        return `This action removes a #${id} riot`;
    }
    riotParam(pseudo, mail) {
        check_pseudo(pseudo, mail);
        console.log("pseudo : " + pseudo);
        console.log("email : " + mail);
    }
};
RiotService = __decorate([
    (0, common_1.Injectable)()
], RiotService);
exports.RiotService = RiotService;
//# sourceMappingURL=riot.service.js.map