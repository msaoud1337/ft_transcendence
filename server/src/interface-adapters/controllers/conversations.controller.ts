import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/frameworks/auth/jwt/jwt-auth.guard';
import { DataService } from 'src/services/data/data.service';
import { ConversationParams } from 'src/services/helpers/validators';
import { ConversationUserService } from 'src/services/use-cases/conversation-user/conversation-user.service';
import { ConversationService } from 'src/services/use-cases/conversation/conversation.service';

@Controller('conversations')
export class ConversationsController {
  constructor(
    private conversationService: ConversationService,
    private dataService: DataService,
    private conversationUserService: ConversationUserService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAllConversations() {
    try {
      // return await this.conversationService.findPrivateConversationOfTwoUsers(
      //   62196,
      //   62296,
      // );
      // return await this.conversationService.findAll();
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findConversation(@Param() params: ConversationParams) {
    try {
      return await this.dataService.findConversationById(params.id);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Get(':id/messages')
  @UseGuards(JwtAuthGuard)
  async findConversationWithMessages(
    @Param() params: ConversationParams,
    @Req() req,
  ) {
    try {
      return await this.dataService.findConversationWithMessages(
        params.id,
        req.user.id,
      );
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Get('private/users/me')
  @UseGuards(JwtAuthGuard)
  async getAllMyConversations(@Req() req) {
    try {
      return await this.dataService.getAllMyPrivateConversations(req.user.id);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }


  @Post('channel/create/users/me')
  @UseGuards(JwtAuthGuard)
  async addNewChannelConversation(@Req() req) {
    try {
      return await this.dataService.addNewChannelConversation(req.user.id);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Post('channel/add/users/:userId/conversation/:conversationId')
  @UseGuards(JwtAuthGuard)
  async addNewUserToChannelConversation(@Param() params: ConversationParams) {
    try {
      return await this.dataService.addNewUserToChannelConversation(
        params.userId,
        params.conversationId,
      );
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Post('private/users/me/:userId')
  @UseGuards(JwtAuthGuard)
  async addNewPrivateConversation(
    @Req() req,
    @Param() params: ConversationParams,
  ) {
    try {
      return await this.dataService.addNewPrivateConversation(
        req.user.id,
        params.userId,
      );
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteConversation(@Param() params: ConversationParams) {
    try {
      return await this.conversationService.delete(params.id);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
