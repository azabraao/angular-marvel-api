import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const URI = "https://gateway.marvel.com:443/v1/public/characters";
const API_KEY = "8e01e7c969b0bff1276901db16d8914f";
const HASH = "18e094aaf511ffaaa208b11e9ad2486d";
const TS = "1585787204";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listCharacters(nameCharacter: string) {
    return this.http.get<Photo[]>(
      `${URI}?limit=10&apikey=${API_KEY}&hash=${HASH}&ts=${TS}`
    );
  }
}
