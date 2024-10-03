const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      interval: 0,
    };
  },
  methods: {
    add(interval) {
      this.counter += interval;
    },
    reduce(interval) {
      this.counter -= interval;
    },
    setInterval(event) {
      this.interval = Number(event.target.value); // convert string to number
    },
  },
});

app.mount("#events");
