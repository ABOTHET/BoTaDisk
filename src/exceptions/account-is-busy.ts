import { HttpException, HttpStatus } from "@nestjs/common";

export class AccountIsBusy extends HttpException {
  constructor() {
    super('Этот аккаунт занят...', HttpStatus.BAD_REQUEST);
  }
}