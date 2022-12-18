import { Controller, Delete, Get, Param, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';
import { NotificationParams } from 'src/services/helpers/validators';
import { NotificationService } from 'src/services/use-cases/notification/notification.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private notificationService: NotificationService,
    private dataService: DataService,
  ) {}

  @Get()
  async findAllNotifications() {
    try {
      return await this.notificationService.findAll();
    } catch (err) {
                throw new UnauthorizedException();

    }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async findAllMyNotifications(@Req() req) {
    try {
      return await this.dataService.findMyNotifications(req.user.id);
    } catch (err) {
                throw new UnauthorizedException();

    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findNotificationsOfUser(@Param() params: NotificationParams) {
    try {
      return await this.dataService.findMyNotifications(params.id);
    } catch (err) {
                throw new UnauthorizedException();

    }
  }

  @Get('requests/users/me')
  @UseGuards(JwtAuthGuard)
  async findMyRequestsNotifications(@Req() req) {
    try {
      return await this.dataService.findMyRequestsNotifications(req.user.id);
    } catch (err) {
                throw new UnauthorizedException();

    }
  }

  @Get('conversations/users/me')
  @UseGuards(JwtAuthGuard)
  async findMyConversationsNotifications(@Req() req) {
    try {
      return await this.dataService.findMyConversationsNotifications(
        req.user.id,
      );
    } catch (err) {
                throw new UnauthorizedException();

    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async removeNotification(@Param() params: NotificationParams) {
    try {
      return await this.notificationService.remove(params.id);
    } catch (err) {
                throw new UnauthorizedException();

    }
  }
}
