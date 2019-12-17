import { animals } from '../SimpleFactory';
import { AnimalShelter } from '../SimpleFactory';

// 是不是領養到狗?
test('isDog', () => {
  expect(new AnimalShelter().adoptAnimals(animals.dog).getType()).toBe(animals.dog);
});

// 是不是領養到貓?
test('isCat', () => {
  expect(new AnimalShelter().adoptAnimals(animals.cat).getType()).toBe(animals.cat);
});