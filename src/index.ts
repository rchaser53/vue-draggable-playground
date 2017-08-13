import * as Vue from 'vue'
import * as draggable from 'vuedraggable'

new Vue({
  el: '#app',
  components: {
    draggable
  },
  template: `<div><draggable v-model="items">
              <transition-group>
                  <div v-for="item in items" :key="item.id">
                      {{item.name}}
                  </div>
              </transition-group>
            </draggable></div>`,
  data() {
    return {
      items: [
        { id: '1', name: 'apple'},
        { id: '2', name: 'lemon'},
        { id: '3', name: 'banana'},
        { id: '4', name: 'orange'},
        { id: '5', name: 'melon'},
      ]
    }
  },
  mounted() {
    console.log('mounted')
  }
})