import { Sensor, ConcreteSensor, SensorMachine } from '../Prototype';

describe('Sensing vendors scenario', () => {

  // 客戶需要 200 個感測裝置
  it('Customer need 200 sensors...', () => {

    // 客戶需求感測裝置清單
    const sensors = [] as Array<Sensor>;

    // 先生產 1 個感測裝置
    const sensor = new ConcreteSensor();

    // 推入客戶需求感測裝置清單
    sensors.push(sensor);

    // 於感測裝置機器設置原型(先前已生產的感測裝置)
    const sensorMachine = new SensorMachine(sensor);

    // 還需要複製 199 個...
    for (let index = 1; index < 200; index++) {

      // 複製先前產生的感測裝置
      const sensor = sensorMachine.cloneSensor() as ConcreteSensor;

      // 給定產品編號
      sensor.setProductNo(index);

      // 推入客戶需求感測裝置清單
      sensors.push(sensor);
    }

    // 驗證是否已有 200 個不同產品編號的感測裝置
    sensors.forEach(function(sensor, index){
      expect((sensor as ConcreteSensor).getProductNo()).toBe(index);
    });
  });
});