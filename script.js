(function () {
  'use strict';

  let androidPhone = {},
      iOsPhone = {};

      function MobilePhone() {
          this.noOfSim = noOfSim;
          this.touchscreen = true;
          this.cardSlot = false;
          this.cardSlot = cardSlot;
          this.radio = false;
          this.batteryRemovable = false;
      }

      MobilePhone.prototype.identify = function(phone) {
        this.me = phone.name + ' ' + phone.model;
        return 'This is ' + this.me;
      }

      init();

      function init() {
        androidPhone = Object.create(MobilePhone);
        iOsPhone = Object.create(MobilePhone);
        androidPhone = {
          name: 'OnePlus',
          model: '6T',
          weight: '185g',
          noOfSim: 2,
          os: 'Android 9.0',
          color: 'mirror black',
          battery: '3700 mAh'
        };

        iOsPhone = {
          name: 'Apple iPhone',
          model: 'X',
          weight: '174g',
          noOfSim: 1,
          os: 'iOS 11.1.1',
          color: 'space gray',
          battery: '2716 mAh'
        };

        Object.defineProperty(androidPhone, 'ppi', {
        	enumerable: true,
          writable: false,
	        configurable: true,
        	value: 402
        });

        Object.defineProperty(androidPhone, 'ppi', {
        	enumerable: true,
          writable: false,
	        configurable: false,
        	value: 502
        });

        Object.seal(iOsPhone);
        console.log(Object.getOwnPropertyDescriptor(iOsPhone, 'model'));
        console.log(androidPhone.hasOwnProperty('batteryRemovable'));
        console.log('batteryRemovable' in androidPhone);
        console.log(androidPhone.__proto__.isPrototypeOf(MobilePhone));
        console.log(androidPhone.ppi);
        console.log(Object.getOwnPropertyDescriptor(androidPhone, 'ppi'));
        console.log(MobilePhone.prototype.identify(androidPhone));
        console.table(androidPhone);
        console.table(iOsPhone);
        console.log(MobilePhone.prototype.identify(iOsPhone));
      }
})();
