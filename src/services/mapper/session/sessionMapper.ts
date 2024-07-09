import { createMap } from "@automapper/core";
import { mapper } from "../../../config/mapper";
import { SessionRequestDto } from "../../../models/session/dto/request/sessionRequestDto";
import { SessionResponseDto } from "../../../models/session/dto/response/sessionResponseDto";
import { Session } from "../../../models/session/model/sessionModel";

export class SessionMapper {
  static defineMapper(): void {
    createMap(mapper, SessionRequestDto, Session);
    createMap(mapper, Session, SessionResponseDto);
    createMap(mapper, SessionResponseDto, Session);
    createMap(mapper, Session, SessionRequestDto);
  }
}
