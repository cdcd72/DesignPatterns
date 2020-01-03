import { Cat, NullAnimal, Person } from '../NullObject';

describe('Person heard some animal sound scenario', () => {

  // 沒有使用空物件模式情況(有產生貓的實例)
  it('Not use null object pattern scenario 1...', () => {

    // 貓
    const cat = new Cat();

    // 人
    const person = new Person();

    // 動物
    const animal = cat ? cat : undefined;

    // 預期聽到貓叫聲
    expect(person.hear(animal)).toBe('喵喵喵~');
  });

  // 沒有使用空物件模式情況(沒有產生貓的實例)
  it('Not use null object pattern scenario 2...', () => {

    // 貓
    const cat = undefined;

    // 人
    const person = new Person();

    // 動物
    const animal = cat ? cat : undefined;

    // 預期沒有聽到任何聲音
    expect(person.hear(animal)).toBe(undefined);
  });

  // 有使用空物件模式情況(有產生貓的實例)
  it('Use null object pattern scenario 1...', () => {

    // 貓
    const cat = new Cat();

    // 人
    const person = new Person();

    // 動物
    const animal = cat ? cat : new NullAnimal();

    // 預期聽到貓叫聲
    expect(person.hearWithNullObjectPattern(animal)).toBe('喵喵喵~');
  });

  // 有使用空物件模式情況(沒有產生貓的實例)
  it('Use null object pattern scenario 2...', () => {

    // 貓
    const cat = undefined;

    // 人
    const person = new Person();

    // 動物
    const animal = cat ? cat : new NullAnimal();

    // 預期沒有聽到任何聲音
    expect(person.hearWithNullObjectPattern(animal)).toBe(undefined);
  });
});