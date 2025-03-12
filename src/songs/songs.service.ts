import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db/array

  private readonly songs: string[] = [];

  create(song: string) {
    // Save the song in the DB
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // Fetch the songs from the DB
    return this.songs;
  }
}
