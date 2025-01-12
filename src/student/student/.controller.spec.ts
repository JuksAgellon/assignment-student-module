import { Test, TestingModule } from '@nestjs/testing';
import { Student\Controller } from './student\.controller';

describe('Student\Controller', () => {
  let controller: Student\Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Student\Controller],
    }).compile();

    controller = module.get<Student\Controller>(Student\Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
