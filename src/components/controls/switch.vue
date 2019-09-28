<template>
  <div class="">
    <div class="block-container">
      <div class="switch-wrapper">
        <div ref="switch" v-touch:tap="toggle" class="switch" >
          <div @click.self="full" class="icon" style="position:absolute; width: 100%; text-align: center; top: 20px;">
            <fam-icon :icon="icon" width="40" height="40" color="#fff"></fam-icon>
          </div>

          <div v-show="state" class="switch-inner" :style="innerSwitchStyle">
          </div>
          <div class="switch-value">
            <span v-show="state">ON</span>
            <span v-show="!state">OFF</span>
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
