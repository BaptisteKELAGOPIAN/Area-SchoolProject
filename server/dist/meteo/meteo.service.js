"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeteoService = void 0;
const common_1 = require("@nestjs/common");
function Discordsend(city) {
    const axios = require("axios");
    getMeteo(city).then((datameteo) => {
        var meteo = datameteo.toString();
        let embeds = [
            {
                title: "I'm a bot meteo",
                color: 5174599,
                footer: {
                    text: `📅 ${meteo}`,
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
            console.log("Webhook delivered successfully");
            return response;
        })
            .catch((error) => {
            console.log(error);
            return error;
        });
    });
}
function saveMeteo(city) {
    var fs = require('fs');
    getMeteo(city).then((datameteo) => {
        var meteo = datameteo.toString();
        fs.writeFile("meteo.txt", meteo, function (err) {
            if (err)
                throw err;
            console.log('File is created successfully.');
        });
    });
}
async function mytest(city) {
    const fs = require('fs');
    getMeteo(city).then((datameteo) => {
        fs.readFile('meteo.txt', 'utf8', function (err, data) {
            if (err)
                throw err;
            if (Math.abs(datameteo - data) > 1) {
                console.log("diff > 1°");
                saveMeteo(city);
                Discordsend(city);
            }
        });
    });
}
function sendEmail(city) {
    var nodemailer = require('nodemailer');
    getMeteo(city).then((datameteo) => {
        var meteo = datameteo.toString();
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'baptiste.kela@gmail.com',
                pass: 'vrpkrufyvusiebyl'
            }
        });
        var mailOptions = {
            from: 'baptiste.kela@gmail.com',
            to: 'baptiste.kela@gmail.com',
            subject: 'Sending Email Meteo',
            text: meteo
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
}
function getMeteo(city) {
    const axios = require('axios');
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=69afb78856e0ac5e09c45dba75a9f56a&units=metric`;
    const promise = axios.get(url);
    const dataPromise = promise.then((response) => response.data.main.temp);
    return (dataPromise);
}
async function corpMeteo(city) {
    saveMeteo(city);
    Discordsend(city);
    setInterval(mytest, 10000, city);
}
let MeteoService = class MeteoService {
    create(createMeteoDto) {
        return 'This action adds a new meteo';
    }
    findAll() {
        return `This action returns all meteo`;
    }
    findOne(id) {
        return `This action returns a #${id} meteo`;
    }
    update(id, updateMeteoDto) {
        return `This action updates a #${id} meteo`;
    }
    remove(id) {
        return `This action removes a #${id} meteo`;
    }
    meteoglo(city) {
        corpMeteo(city);
        return `This action returns a #${city} meteo`;
    }
};
MeteoService = __decorate([
    (0, common_1.Injectable)()
], MeteoService);
exports.MeteoService = MeteoService;
//# sourceMappingURL=meteo.service.js.map