<template>
  <div class="clock">
    <div class="container h-full">
      <div class="columns  h-full">
        <div class="column col-7">
          <div class="time">
            <span>{{timeFormatted}}</span>
          </div>
          <div class="date">
            <span>{{dateFormatted}}</span>
          </div>
        </div>
        <div class="column col-5">

          <div class="today-weather" v-if="todayWeather">
            <div class="icon-wrapper">
              <div>
                <fam-icon :icon="todayWeather.icon" color="#fff" width="110"></fam-icon>
              </div>
              <div class="day-temp">
                <div>
                  70&#176;
                </div>
                <div>
                  40&#176;
                </div>
              </div>
            </div>


            <div>
              <span>{{todayWeather.summary}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import moment from 'moment'
  export default {
      data() {
          return {
              weather: null
          }
      },
    computed: {
        timeFormatted() {
            return moment().format('LT')
        },
        dateFormatted() {
            return moment().format('LL')
        },
        todayWeather() {
            if(this.weather) {
                return this.weather.daily.data[0];
            }
            else {
                return null;
            }

        }
    },
      mounted() {
          this.$socket.on("weather-update", (result) => {
              console.log("got the weather", result);
              this.setWeather(result);
          });
      },
      methods: {
        setWeather(weather) {
            this.weather = weather;
        }
      }
  }
</script>
<style>
  .clock {
    padding: 30px;


  }
  .clock .time {
    font-family: 'Roboto', sans-serif;
    font-size: 5em;
    text-align: center;
    margin-bottom: -20px;
  }
  .clock .date {
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    text-align: center;
  }
  .today-weather {
    text-align: center;
  }

  .icon-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
  }
  .clock .day-temp {
    font-size: 20px;
    text-align: center;
  }
  .clock .day-temp > div:first-child {
    border-bottom: solid 1px #ffffff2e;
  }
</style>
