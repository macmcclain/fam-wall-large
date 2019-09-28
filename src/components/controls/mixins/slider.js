export default {
  props: {
    rangeMin: {
      type: Number,
      default: 0
    },
    rangeMax: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      step: 10,
      value: 0,
      oldValue: 0,
      tolerance: 10,
      innerSwitchHeight: 0,
      percent: 0
    }
  },
  watch: {
    percent() {
      var switch1 = this.$refs.switch;
      var switchRect = switch1.getBoundingClientRect();
      this.innerSwitchHeight = this.percent * (switchRect.height / 100);
    },

    value() {
      var tolerance = 10;

      var doUpdate = false;
      if (this.value >= this.oldValue + tolerance) {
        doUpdate = true;
        this.value = this.value;
      }
      if (this.value <= this.oldValue - tolerance) {
        doUpdate = true;
        this.oldValue = this.value;
      }

      if (doUpdate) {
        this.$socket.send("command", this._prepairMessage(this.value))
      }

    }
  },
  computed: {
    innerSwitchStyle () {
      var radius = 0;
      if(this.percent == 100) {
        radius = 5;
      }
      return {
        height: this.innerSwitchHeight + "px",
        borderTopLeftRadius: radius + "px",
        borderTopRightRadius: radius + "px"
      }
    }
  },
  methods: {
    movingHandler(event) {
        var switch1 = this.$refs.switch;
        var switchRect = switch1.getBoundingClientRect();

        // get the percent.
        var yCoordinate = event.targetTouches[0].clientY - switchRect.top;
        var value = 100 - (yCoordinate / switchRect.height) * 100;
        value = Math.round(value);

        if(value < 0) {
          value = 0;
        }
        else  if(value > 100) {
          value = 100;
        }


        this.updateDisplay(value);
        if(value == 0) {
          this.state = false;
        }
        else {
          this.state = true;
        }




        var steps = (this.rangeMax - this.rangeMin) / 100;
        this.value = Math.round(this.rangeMin + (steps * value));
    },
    updateDisplay(value) {
      this.percent = value;
    },
    up() {
      this.state = true;
      this.value += this.step;
      if(this.value > 100) {
        this.value = 100;
      }
    },
    down() {
      this.value -= this.step;
      if(this.value < 0) {
        this.value = 0;
      }
      if(this.value == 0) {
        this.state = false
      }
    },
    full(event) {
      if(this.state) {
        this.state = false;
      }
      else {
        this.state = true;
        this.value = 100;
      }
    }
  }
}
