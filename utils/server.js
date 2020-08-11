import { Server, Model, Factory } from "miragejs";
import { name, internet, lorem, date, random } from "faker";
import addMinutes from "date-fns/addMinutes";

const dateNow = new Date();

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    environment,

    models: {
      tweet: Model,
    },

    factories: {
      tweet: Factory.extend({
        fullName: () => `${name.firstName()} ${name.lastName()}`,
        userName: () => `${internet.userName()}`,
        avatar: () => internet.avatar(),
        text: () => lorem.lines(random.number(3) || 1),
        createdAt: () => addMinutes(dateNow, random.number(1000)).toISOString(),
      }),
    },

    seeds(server) {
      server.createList("tweet", 15);
    },

    routes() {
      this.namespace = "api";
      this.get("tweets");
    },
  });
}
