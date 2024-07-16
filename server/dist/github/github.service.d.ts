import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';
export declare class GithubService {
    create(createGithubDto: CreateGithubDto): string;
    ActionReac_Commit(token: string, repository: string, mail: string): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGithubDto: UpdateGithubDto): string;
    remove(id: number): string;
}
