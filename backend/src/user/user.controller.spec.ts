import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserServiceMock } from './mocks/User.service.mock';
import { userMock } from './mocks/user.mock';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useClass: UserServiceMock }]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe("getUsers",  () => {
    it("should return an array of user", () =>{
      expect(controller.getUsers()).resolves.toEqual(userMock)
    })
  })

  describe("getUser",  () => {
    it("should return a  single of user", () =>{
      const id = "$2b$10$hKn66xbIAP0MUliFX8g9v.xadI/6o9FONUQ/9DgnRFMhP1GZocV8a"
      const p = userMock.find( p => p.id === id)
      expect(controller.getUser(id)).resolves.toEqual(p)
    })
  })

  describe("createUser", () => {
    it('should return {message: "user created"}', async () => {
      await expect(controller.createUser(userMock[0])).resolves.toEqual({ message: "user created" });
    });
  });
  

})
