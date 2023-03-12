import { createApp, defineComponent, h } from 'vue'
import App from './App.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
const App1 = defineComponent({
  render() {
    return h(App)
  },
})
createApp(App1).mount('#app')
