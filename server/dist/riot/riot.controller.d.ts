import { RiotService } from './riot.service';
import { CreateRiotDto } from './dto/create-riot.dto';
import { UpdateRiotDto } from './dto/update-riot.dto';
import { User } from 'src/models/user.model';
export declare class RiotController {
    private readonly riotService;
    constructor(riotService: RiotService);
    create(createRiotDto: CreateRiotDto): string;
    riotParam(body: Pick<User, 'name' | 'email'>): void;
    notionParam(pseudo: string, mail: string): void;
    findOne(id: string): string;
    update(id: string, updateRiotDto: UpdateRiotDto): string;
    remove(id: string): string;
}
