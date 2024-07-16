import { CreateNotionDto } from './dto/create-notion.dto';
import { UpdateNotionDto } from './dto/update-notion.dto';
export declare class NotionService {
    create(createNotionDto: CreateNotionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNotionDto: UpdateNotionDto): string;
    remove(id: number): string;
    notionParam(key: string, blockid: string): string;
}
