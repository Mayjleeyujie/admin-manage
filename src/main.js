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
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";  // optional full css additions

Vue.use(VueFormGenerator)
import formCreate from '@form-create/element-ui';
// import 'k-form-design/styles/k-form-design.less'

import KFormDesign from 'k-form-design'
import 'k-form-design/lib/k-form-design.css'
Vue.use(KFormDesign)
 
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(formCreate)
//

Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
