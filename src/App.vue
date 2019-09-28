<template>
  <div id="app" class="h-full" style="">

    <div class="container h-full">
      <div class="columns col-gapless h-full">
        <div class="column col-9">
          <div class="component">
            <clock></clock>
          </div>
          <div class="component">
            <calendar-dashboard></calendar-dashboard>
          </div>
          <div class="component">
            <weather zip="98034"></weather>
          </div>

        </div>
        <div class="column col-3 control-bar">
          <div class="item">
            <scene label="Good Morning" icon="sunrise" uid="ddd"></scene>
          </div>
          <div class="item">
            <scene label="Good Night" icon="moon" uid="ddd"></scene>
          </div>
          <div class="item">
            <thermostat label="Thermostat" :range-min="50" :range-max="85"  uid="ZWaveNode002ZW3003GE12724InWallDimmer_Dimmer"></thermostat>
          </div>
          <div class="item">
            <dimmer-switch label="Living Room" :is-dimmer="true" icon="pendant-lamp" uid="ZWaveNode002ZW3003GE12724InWallDimmer_Dimmer"></dimmer-switch>
          </div>
          <div class="item">
            <on-off-switch label="Upstairs Hall"  uid="ZWaveNode002ZW3003GE12724InWallDimmer_Dimmer"></on-off-switch>
          </div>

          <div class="item">
            <dimmer-switch label="Entry" icon="pendant-lamp" uid="ZWaveNode002ZW3003GE12724InWallDimmer_Dimmer"></dimmer-switch>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import DimmerSwitch from '@/components/controls/dimmer-switch'
    import Switch from '@/components/controls/switch'
    import Thermostat from '@/components/controls/thermostat'
    import Scene from '@/components/scene'
    import Weather from '@/components/weather'
    import Clock from '@/components/clock'
    import CalendarDashboard from '@/components/calendar/dashboard'
export default {
  name: 'App',
  components: {
      'on-off-switch': Switch,
      DimmerSwitch,
      Thermostat,
      Scene,
      Weather,
      Clock,
      CalendarDashboard
  }
}
</script>

<style>
#app {
  color: #fff;
  background-image: linear-gradient(to bottom, #0eb9f9, #136ee3);
  font-family: 'Archivo', sans-serif;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
}
.container {
  margin: 0px;
  padding: 0px;
}
.component {
  margin-bottom: 40px;
}

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }

  .control-bar {
    background-color: #000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
.control-bar .item {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px #ffffff2e;
}
.control-bar .item:last-child {
  border-bottom: none;
}
</style>
