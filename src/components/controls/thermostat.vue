<template>
  <div class="thermostat">
    <div class="block-container">
      <div class="switch-wrapper">
        <div ref="switch" v-touch:tap="tap" class="switch" v-touch:moving="movingHandler" :class="{'on': state}">


          <div v-show="state" class="switch-inner" :style="innerSwitchStyle">
          </div>
          <div class="switch-value">
            <span v-show="state">{{this.value}}&#176;</span>
            <span class="off" v-show="!state">
              <div>
                Current Temp
              </div>
              <div>
                40&#176;
              </div>


            </span>
          </div>
        </div>
        <div class="switch-label">
          {{label}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SliderMixin from './mixins/slider';
  import ControlMixin from './mixins/control';
  import SwitchMixin from './mixins/switch';
  export default {
      mixins: [SliderMixin, ControlMixin, SwitchMixin],

      data() {
          return {

          }
      },
      watch: {


      },
      computed: {

      },
      methods: {
          tap() {

          },
          _prepairMessage(state) {
              return {
                  message: {
                      id: this.uid,
                      light: '' + state
                  }
              }
          }
      }
  }
</script>


