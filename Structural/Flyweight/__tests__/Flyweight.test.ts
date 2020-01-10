import { ConcreteFlyweight, FlyweightFactory, Police } from '../Flyweight';

describe('Police station scenario...', () => {

  // 做筆錄...
  it('Take a statement..', () => {

    const factory = new FlyweightFactory([
        ['Chevrolet', 'Camaro2018', 'pink'],
        ['Mercedes Benz', 'C300', 'black'],
        ['Mercedes Benz', 'C500', 'red'],
        ['BMW', 'M5', 'red'],
        ['BMW', 'X6', 'white'],
        // ...
    ]);
    
    factory.listFlyweights();

    const police = new Police();

    police.addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

    police.addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

    factory.listFlyweights();
  });
});