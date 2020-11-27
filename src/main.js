import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import draggable from 'vuedraggable'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/style.css'
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import DynamicForm from 'vue-dynamic-form-component'
Vue.use(DynamicForm)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
