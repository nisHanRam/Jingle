import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  // local db/array

  private readonly songs: CreateSongDTO[] = [];

  create(song: CreateSongDTO) {
    // Save the song in the DB
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // Fetch the songs from the DB
    return this.songs;
  }
}
