import * as Vue from 'vue'
import * as draggable from 'vuedraggable'

declare module 'vue/types/vue' {
  interface Vue {
    items: {
      id: string;
      name: string;
    }[];
  }
}

new Vue ({
  el: '#app',
  components: {
    draggable
  },
  template: `<div>
              <draggable v-model="items" v-bind:move="onMoved" @end="onEnd">
                <transition-group>
                    <div v-for="item in items" :key="item.id">
                        {{item.name}}
                    </div>
                </transition-group>
              </draggable>
              <div v-on:click="higepon">nya-n</div>
            </div>
            `,
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
  methods: {
    onMoved(event, originalEvent) {
      return false
    },
    onEnd(event, originalEvent) {
      Vue.set(this, 'items', [
        { id: '2', name: 'lemon'},
        { id: '1', name: 'apple'},
        { id: '3', name: 'banana'},
        { id: '4', name: 'orange'},
        { id: '5', name: 'melon'}
      ])
      return true
    },
    higepon() {
      console.log(132)
      Vue.set(this.items[0], 'name', 'daidageki');


    }
  }
})