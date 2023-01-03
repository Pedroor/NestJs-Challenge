import { Controller, Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'signin' };
  }

  signup() {
    return { msg: 'hello' };
  }
}
