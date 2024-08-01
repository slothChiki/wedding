import { BoardListApi } from './board-list.api';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class BoardViewDto {
    constructor(options?: Partial<BoardViewDto>) {
        if (options !== undefined) Object.assign(this, options);
    }
    // @ValidateNested({ each: true })
    // @Type(() => BoardListApi)
    boardList: BoardListApi[];
}
