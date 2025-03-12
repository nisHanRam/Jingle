import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  addOne(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
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

/* NOTE
Methods in Controller like addOne, findAll, etc. are called Route Handlers.
If you want to pass the incoming request through some logic before it reaches the route handlers, then you will write that logic in functions called Middlewares.
*/
