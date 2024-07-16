import { NotionService } from './notion.service';
import { UpdateNotionDto } from './dto/update-notion.dto';
import { User } from 'src/models/user.model';
export declare class NotionController {
    private readonly notionService;
    constructor(notionService: NotionService);
    notionParam(key: string, blockid: string): string;
    create(body: Pick<User, 'name' | 'id'>): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNotionDto: UpdateNotionDto): string;
    remove(id: string): string;
}
