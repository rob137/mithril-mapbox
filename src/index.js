const m = require('mithril');
const root = document.body;

const Map = {
  view: () => {
    return m('p', 'test');
  },
};
console.log(132);

m.mount(root, Map);
