import { animals, size } from '../AbstractFactory';
import { AnimalShelter, CatShelter, DogShelter } from '../AbstractFactory';

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

// 狗的衣服Size是不是XL?
test('isDogClothesXL', () => {
  let catShelter = new DogShelter();
  let animalShelter = new AnimalShelter(catShelter);
  expect(animalShelter.getRealAnimalShelter().adoptAnimal().getClothesSize()).toBe(size.XL);
});

// 貓的衣服Size是不是XS?
test('isCatClothesXS', () => {
  let catShelter = new CatShelter();
  let animalShelter = new AnimalShelter(catShelter);
  expect(animalShelter.getRealAnimalShelter().adoptAnimal().getClothesSize()).toBe(size.XS);
});

// 狗的鞋子Size是不是XL?
test('isDogShoesXL', () => {
  let catShelter = new DogShelter();
  let animalShelter = new AnimalShelter(catShelter);
  expect(animalShelter.getRealAnimalShelter().adoptAnimal().getShoesSize()).toBe(size.XL);
});

// 貓的鞋子Size是不是XXS?
test('isCatShoesXXS', () => {
  let catShelter = new CatShelter();
  let animalShelter = new AnimalShelter(catShelter);
  expect(animalShelter.getRealAnimalShelter().adoptAnimal().getShoesSize()).toBe(size.XXS);
});