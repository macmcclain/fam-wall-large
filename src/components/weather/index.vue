<template>
  <div>
    <div v-if="weather" class="container">
      <div  class="weather">
        <div  v-for="day in daily" class="day">
          <div class="day-label">
            <div class="day-of-week">{{getDayLabel(day.time)}}</div>
            <div class="date">{{getDate(day.time)}}</div>
          </div>
          <div>
            <div class="day-icon">
              <fam-icon :icon="day.icon" color="#fff" width="90"></fam-icon>
            </div>

          </div>

          <div class="day-temp">
            <div class="day-temp-high" v-html="getTemp(day.temperatureHigh)"></div>
            <div class="day-temp-low">
              <span>Low</span> <span v-html="getTemp(day.temperatureLow)"></span>
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
      props: {
        zip: {
            type: String,
            required: true
        }
      },
      data() {
          return {
              weather: null
          }
      },
      mounted() {
          this.$socket.on("weather-update", (result) => {
              console.log("got the weather", result);
              this.setWeather(result);
          });

          this.requestWeather();
      },
      computed: {
          daily() {
              return this.weather.daily.data.slice(1,7);
          }
      },
      methods: {
          getDayLabel(timestamp) {
              return moment.unix(timestamp).calendar(null, {
                  sameDay: '[Today]',
                  nextDay: '[Tomorrow]',
                  nextWeek: 'dddd',
                  lastDay: '[Yesterday]',
                  lastWeek: '[Last] dddd',
                  sameElse: 'dddd'
              })
          },
          getDate(timestamp) {
              return moment.unix(timestamp).format('MM/DD');
          },
          getTemp(temp) {
              return Math.round(temp) + "&#176;"
          },
          requestWeather() {
              this.$socket.send("get-weather", {zip: this.zip});
          },
          setWeather(weather) {
              this.weather = weather;
          }
      }
  }
</script>
<style>
  .weather {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    /* background-color: #131212; */
  }
  .weather .day {
    text-align: center;
    border-right: solid 1px #ffffff2e;
    padding: 15px;
  }
  .weather .day:last-child {
    /* border: solid 1px #0eb9f9; */
    border-right: none;
  }
  .day-label {
    width: 100%;
    text-transform: uppercase;

  }
  .day-of-week {
    margin-bottom: 5px;
  }
  .day-temp {
    font-size: 2em;

  }
  .day-temp-high {
    margin-bottom: 10px;
  }
  .day-temp-low {
    font-size: .4em;
  }
  .day  .date {
    font-size: .8em;
  }
</style>
