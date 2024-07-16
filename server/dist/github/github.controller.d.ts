import { GithubService } from './github.service';
import { UpdateGithubDto } from './dto/update-github.dto';
import { User } from 'src/models/user.model';
export declare class GithubController {
    private readonly githubService;
    constructor(githubService: GithubService);
    ActionReac_Commit(body: Pick<User, 'email' | 'password' | 'name'>): Promise<void>;
    findOne(id: string): string;
    update(id: string, updateGithubDto: UpdateGithubDto): string;
    remove(id: string): string;
}
