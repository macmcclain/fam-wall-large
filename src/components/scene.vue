<template>
  <div class="">
    <div class="block-container">
      <div class="scene-wrapper">
        <div @click="activate" class="scene" :class="classes">
          <div class="scene-label">
            <span >{{label}}</span>
          </div>
          <div class="icon">
            <fam-icon :icon="icon" width="50" height="50" color="#fff"></fam-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default
  {
    props: {
        uid: {
            type: String,
            default: "",
            required: true
        },
        label: {
            type: String,
            default: "Scene"
        },
        icon: {
            type: String,
            default: "automation"
        }
    },
    data() {
      return {
          active: false
      }
    },
    computed: {
        classes() {
            if(this.active) {
                return ['scene-active']
            }
            else {
                return []
            }
        }
    },
    methods: {
        activate() {
            this.active = !this.active;
        }
    }
  }
</script>
<style>
  .scene-wrapper {
    color: #fff;
    margin-bottom: 10px;
  }
  .scene {
    position: relative;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    min-height: 100px;
    min-width: 200px;
    border: solid 1px #48464663;
    background-color: #1f1f1f;

  }
  .scene-active {

    background: linear-gradient(331deg, #0eb9f9,  #136ee3, #0eb9f9,  #136ee3, #0eb9f9,  #136ee3 );
    background-size: 600% 600%;

    -webkit-animation: AnimationName 2s ease infinite;
    -moz-animation: AnimationName 2s ease infinite;
    animation: AnimationName 2s ease infinite;

  }
  .scene-label {
    text-transform: uppercase;
    text-align: center;
    padding-top: 10px;
    font-size: .8em;
  }

  .scene .icon {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 10px;
    color: #fff;
  }

  @-webkit-keyframes AnimationName {
    0%{background-position:53% 0%}
    50%{background-position:48% 100%}
    100%{background-position:53% 0%}
  }
  @-moz-keyframes AnimationName {
    0%{background-position:53% 0%}
    50%{background-position:48% 100%}
    100%{background-position:53% 0%}
  }
  @keyframes AnimationName {
    0%{background-position:53% 0%}
    50%{background-position:48% 100%}
    100%{background-position:53% 0%}
  }
</style>
