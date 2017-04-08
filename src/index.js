let NotifikationComponent = require('./notifikation.vue'),
  Notifikation = {};

Notifikation.install = function (Vue, options) {
  let Component = Vue.extend(NotifikationComponent),
    queue = [],
    vm;

  Vue.prototype.$notifikation = {
    show: function (options) {
      let notifikationItem,
        items,
        itemsLen,
        bgColor,
        textColor = 'rgb(255, 255, 255)',
        body = document.querySelector('body');

      if (options.level === 'error') {
        bgColor = 'rgb(214, 38, 36)';
      } else if (options.level === 'success') {
        bgColor = 'rgb(134, 193, 73)';
      } else {
        bgColor = 'rgb(148, 144, 152)';
      }

      if (!vm) {
        let selector = options.selector || '#notifikation';

        if (!document.querySelector(selector)) {
          let el = document.createElement('div');

          el.setAttribute('id', 'notifikation');
          document.querySelector('body').appendChild(el);
        }

        vm = (new Component({
          data: {
            items: []
          }
        })).$mount(selector);
      }
      items = vm.$data.items;
      itemsLen = items.length;

      function calculateTop(options) {
        let height = options.height || 50,
          top = options.top || 10;

        return `${itemsLen > 0 ? (itemsLen * height) + (itemsLen * top) + top : top}px`;
      }

      notifikationItem = {
        message: options.message || 'Notified!',
        style: {
          width: `${options.width || 200}px`,
          height: `${options.height || 50}px`,
          backgroundColor: options.backgroundColor || bgColor,
          color: options.color || textColor,
          right: `${options.right || 10}px`,
          top: calculateTop(options)
        }
      };

      vm.$data.items.push(notifikationItem);
      setTimeout(() => {
        vm.$data.items.shift();
        vm.$data.items.forEach((item) => {
          item.style.top = `${parseInt(item.style.top, 10) - 60}px`;
        });
      }, options.duration || 3000);
    },

    info: function (options) {
      this.show(options);
    },
    error: function (options) {
      this.show(Object.assign(options, {
        level: 'error'
      }));
    },
    success: function (options) {
      this.show(Object.assign(options, {
        level: 'success'
      }));
    },
    dismiss: function (notifikationId) {
      let itemsLen, i;

      vm.$data.items = notifikationId ? vm.$data.items.filter((item, idx) => {
        return idx !== notifikationId;
      }) : [];
      itemsLen = vm.$data.items.length;

      for (i = notifikationId; i < itemsLen; i += 1) {
        let item = vm.$data.items[i];
        item.style.top = `${parseInt(item.style.top, 10) - 60}px`;
      }
    }
  };
};

export default Notifikation;
