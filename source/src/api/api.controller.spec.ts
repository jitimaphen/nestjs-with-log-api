import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    apiController = app.get<ApiController>(ApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiController.getApi()).toBe('Hello World! API');
    });
    it('should return {result: 30}', () => {
      console.log('test 2', apiController.plus({ a: 10, b: 20 }));
      expect(apiController.plus({ a: 10, b: 20 })).toEqual({ result: 30 });
    });
    it('should return {error: "not a number" }', () => {
      console.log('test 2', apiController.plus({ a: 10, b: 20 }));
      expect(apiController.plus({ a: 'x', b: 20 })).toEqual({
        error: 'not a number',
      });
    });
    it('should return {error: "not a number" }', () => {
      console.log('test 3', apiController.minus({ a: 50, b: 20 }));
      expect(apiController.minus({ a: 50, b: 20 })).toEqual({ result: 30 });
    });
    it('should return {result: 30}', () => {
      console.log('test 4', apiController.multiple({ a: 10, b: 20 }));
      expect(apiController.multiple({ a: 3, b: 10 })).toEqual({ result: 30 });
    });
    it('should return {result: 30}', () => {
      console.log('test 5', apiController.divide({ a: 10, b: 20 }));
      expect(apiController.divide({ a: 300, b: 10 })).toEqual({ result: 30 });
    });
  });
});
