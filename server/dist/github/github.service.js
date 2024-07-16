"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const common_1 = require("@nestjs/common");
const { Octokit } = require("octokit");
let GithubService = class GithubService {
    create(createGithubDto) {
        return 'This action adds a new github';
    }
    async ActionReac_Commit(token, repository, mail) {
        var email = require("emailjs");
        var server = email.server.connect({
            user: "area.mail06@gmail.com",
            password: "gwvuwjwzhalggvck",
            host: "smtp.gmail.com",
            ssl: true
        });
        const octokit = new Octokit({
            auth: token,
        });
        const user = await octokit.request("GET /user");
        var i;
        var lastCommit;
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
            }
            else {
                console.log("The last commit is not the same as the current commit");
                lastCommit = data[0].commit.message;
                server.send({
                    text: lastCommit,
                    from: "Area Team <area.mail06@gmail.com>",
                    to: mail,
                    subject: "There is a new commit on " + repository,
                }, function (err, message) { console.log(err || message); });
            }
        }, 1000);
    }
    findAll() {
        return `This action returns all github`;
    }
    findOne(id) {
        return `This action returns a #${id} github`;
    }
    update(id, updateGithubDto) {
        return `This action updates a #${id} github`;
    }
    remove(id) {
        return `This action removes a #${id} github`;
    }
};
GithubService = __decorate([
    (0, common_1.Injectable)()
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map