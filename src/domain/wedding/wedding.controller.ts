import { NotionService } from "./notion.service";
import { Controller, Get, Render } from "@nestjs/common";

@Controller("card")
export class WeddingController {
  constructor(private readonly notionService: NotionService) {}

  @Get()
  @Render('card/Card01')
  async index() {
    console.log(`card controller`);
    return {
      aaa: "hihihihihihi",
    };
  }
}
