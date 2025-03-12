import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  adddOne() {
    return this.songsService.create('Breathless by Mahadevan');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'Find a song';
  }

  @Put(':id')
  update() {
    return 'Update a song';
  }

  @Delete(':id')
  delete() {
    return 'Delete a song';
  }
}
