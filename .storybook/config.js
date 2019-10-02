import { configure, addDecorator } from '@storybook/vue';
import vuetifyOptions from '../src/plugins/vuetify';
import Vuetify, { VApp, VContent, VDataTable, VBtn } from 'vuetify/lib'

addDecorator(() => ({
  vuetify: new Vuetify(vuetifyOptions),
  components: { VApp, VContent },
  template: '<v-app><v-content><story/></v-content></v-app>',
}))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
