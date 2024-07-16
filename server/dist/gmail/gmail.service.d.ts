import { CreateGmailDto } from './dto/create-gmail.dto';
import { UpdateGmailDto } from './dto/update-gmail.dto';
export declare class GmailService {
    create(createGmailDto: CreateGmailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGmailDto: UpdateGmailDto): string;
    remove(id: number): string;
}
