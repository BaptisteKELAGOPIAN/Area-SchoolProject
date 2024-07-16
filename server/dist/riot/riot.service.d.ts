import { CreateRiotDto } from './dto/create-riot.dto';
import { UpdateRiotDto } from './dto/update-riot.dto';
export declare class RiotService {
    create(createRiotDto: CreateRiotDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRiotDto: UpdateRiotDto): string;
    remove(id: number): string;
    riotParam(pseudo: any, mail: any): void;
}
