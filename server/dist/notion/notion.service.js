"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionService = void 0;
const common_1 = require("@nestjs/common");
function Discordsend(nb, key, blockid) {
    const axios = require("axios");
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
                        text: `📅 ${(response.results[(nb - 1)].rich_text[0].plain_text)}`,
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
            return (response.results[(nb - 1)].rich_text[0].plain_text);
        })();
    }
    core_discord(nb, blockid);
}
function countProperties(obj) {
    var count = 0;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
}
async function nb_comment(key, blockid) {
    const { Client } = require('@notionhq/client');
    const notion = new Client({ auth: key });
    const response = await notion.comments.list({ block_id: blockid });
    return (countProperties(response.results));
}
function saveNbComment(key, blockid) {
    var fs = require('fs');
    nb_comment(key, blockid).then((result) => {
        var nb = result.toString();
        fs.writeFile("Nb-c.txt", nb, function (err) {
            if (err)
                throw err;
        });
    });
}
async function mytest(key, blockid) {
    const fs = require('fs');
    nb_comment(key, blockid).then((result) => {
        fs.readFile('Nb-c.txt', 'utf8', function (err, data) {
            if (err)
                throw err;
            if (result != data) {
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
        console.log(response.results[(nb - 1)].rich_text[0].plain_text);
        return (response.results[(nb - 1)].rich_text[0].plain_text);
    })();
}
function glo(key, blockid) {
    saveNbComment(key, blockid);
    setInterval(mytest, 3000, key, blockid);
}
let NotionService = class NotionService {
    create(createNotionDto) {
        return 'This action adds a new notion';
    }
    findAll() {
        return `This action returns all notion`;
    }
    findOne(id) {
        return `This action returns a #${id} notion`;
    }
    update(id, updateNotionDto) {
        return `This action updates a #${id} notion`;
    }
    remove(id) {
        return `This action removes a #${id} notion`;
    }
    notionParam(key, blockid) {
        glo(key, blockid);
        return `Hello!`;
    }
};
NotionService = __decorate([
    (0, common_1.Injectable)()
], NotionService);
exports.NotionService = NotionService;
//# sourceMappingURL=notion.service.js.map