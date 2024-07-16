import { GmailService } from './gmail.service';
import { CreateGmailDto } from './dto/create-gmail.dto';
import { UpdateGmailDto } from './dto/update-gmail.dto';
export declare class GmailController {
    private readonly gmailService;
    constructor(gmailService: GmailService);
    authorize(): void;
    create(createGmailDto: CreateGmailDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGmailDto: UpdateGmailDto): string;
    remove(id: string): string;
}
