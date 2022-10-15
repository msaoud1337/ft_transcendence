import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Connection } from "typeorm";
import { UserFriends, UserFriendsRelation } from "../entities/user-friends.entity";

@Injectable()
export class IsBlockedGuard implements CanActivate {
    constructor(private connection: Connection) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const _req = context.switchToHttp().getRequest();
        const relation = await this.connection.getRepository(UserFriends).findOne({
            where: [{
                applicant: Number(_req.user.id),
                recipient: Number(_req.params.userId),
                status: UserFriendsRelation.BLOCKED
            }, {
                applicant: Number(_req.params.userId),
                recipient: Number(_req.user.id),
                status: UserFriendsRelation.BLOCKED
            },]
        });
        if (relation) {
            throw new ForbiddenException('Forbidden: cannot reach the resource');
        }
        return true;
    }
}