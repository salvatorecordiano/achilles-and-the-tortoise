import * as Amqp from "amqp-ts";
import { getAmqConnectionString } from "./utils";

const connection = new Amqp.Connection(getAmqConnectionString())

const exchange = connection.declareExchange("exchange-test0");

const messages = [...Array(100).keys()];

messages.forEach((message) => {
    let text = `Achilles and the tortoise ${message}`;
    exchange.send(new Amqp.Message(text));
    console.log(text);
});

setTimeout(function() {
    console.log('Closing connection')
    connection.close();
}, 500);
