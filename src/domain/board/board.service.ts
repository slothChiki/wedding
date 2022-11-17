import { Injectable } from '@nestjs/common';
import { NotionService } from '../../common/notion/notion.service';

@Injectable()
export class BoardService {
    constructor(private readonly notionService: NotionService) {}
}
