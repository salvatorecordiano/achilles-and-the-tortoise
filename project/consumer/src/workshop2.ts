import * as Amqp from "amqp-ts";
import { getAmqConnectionString } from "./utils";

const connection = new Amqp.Connection(getAmqConnectionString())

const queue = connection.declareQueue('queue-test0');

queue.activateConsumer(function(message) {
    console.log(message.getContent());
    message.ack();
});
