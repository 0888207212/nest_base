import { EntityRepository, Repository } from "typeorm";
import { RoomEntity } from "../entitys/room.entity";

@EntityRepository(RoomEntity)
export class RoomsRepository extends Repository<RoomEntity> {
}