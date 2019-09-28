export default {
  data() {
    return {
      state: false
    }
  },
  watch: {
    state() {
      console.log("state update", this.state)
      var value = this.state ? "ON" : "OFF";
      this.$socket.send("command", this._prepairMessage(value));
    }
  },
  methods: {
    toggle() {
      this.state = !this.state;
      this.percent = 100;
    }
  }
}
