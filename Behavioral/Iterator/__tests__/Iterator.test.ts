import { MenuItem, LunchMenu } from '../Iterator';

describe('Lunch restaurant scenario', () => {

  // 這是正常排列的午餐菜單
  it('Here is the normal lunch menu...', () => {

    // 午餐菜單
    let lunchMenu = new LunchMenu();

    // 加入菜單
    lunchMenu.addItem(new MenuItem('Chicken'));
    lunchMenu.addItem(new MenuItem('Lamb'));
    lunchMenu.addItem(new MenuItem('Salmon'));

    // 取得午餐菜單反覆器
    const it = lunchMenu.getIterator();

    // 驗證菜單項目
    let menuItems: Array<MenuItem> = [];

    while (it.hasNext()) {
      menuItems.push(it.next());
    }

    // 預期 Chicken 的位置為 0
    expect(menuItems.findIndex(menuItem => menuItem.getName() === 'Chicken')).toBe(0);
  });

  // 這是反轉排列的午餐菜單
  it('Here is the reversed lunch menu...', () => {

    // 午餐菜單
    let lunchMenu = new LunchMenu();

    // 加入菜單
    lunchMenu.addItem(new MenuItem('Chicken'));
    lunchMenu.addItem(new MenuItem('Lamb'));
    lunchMenu.addItem(new MenuItem('Salmon'));

    // 取得午餐菜單反轉反覆器
    const it = lunchMenu.getReverseIterator();

    // 驗證菜單項目
    let menuItems: Array<MenuItem> = [];

    while (it.hasNext()) {
      menuItems.push(it.next());
    }

    // 預期 Chicken 的位置為 2
    expect(menuItems.findIndex(menuItem => menuItem.getName() === 'Chicken')).toBe(2);
  });
});