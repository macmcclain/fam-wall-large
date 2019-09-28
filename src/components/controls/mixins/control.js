export default {
  props: {
    uid: {
      type: String,
      default: "",
      required: true
    },
    label: {
      type: String,
      default: "Light"
    },
    icon: {
      type: String,
      default: "bulb"
    }
  },
}
