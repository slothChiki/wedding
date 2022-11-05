import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import Next from "next";
import { AppController } from "./app.controller";
import { WeddingController } from "./domain/wedding/wedding.controller";
import { NotionService } from "./domain/wedding/notion.service";

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== "production",
        conf: { useFilesystemPublicRoutes: false },
      })
    ),
  ],
  controllers: [AppController, WeddingController],
  providers: [NotionService],
})
export class AppModule {}
