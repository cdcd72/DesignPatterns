import { animals } from '../FactoryMethod';
import { AnimalShelter, CatShelter, DogShelter } from '../FactoryMethod';

// 是不是領養到狗?
test('isDog', () => {
  let dogShelter = new DogShelter();
  let animalShelter = new AnimalShelter(dogShelter);
  expect(animalShelter.getRealAnimalShelter().adoptAnimal().getType()).toBe(animals.dog);
});

// 是不是領養到貓?
test('isCat', () => {
  let catShelter = new CatShelter();
  let animalShelter = new AnimalShelter(catShelter);
  expect(animalShelter.getRealAnimalShelter().adoptAnimal().getType()).toBe(animals.cat);
});