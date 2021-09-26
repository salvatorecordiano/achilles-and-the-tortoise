import * as Amqp from "amqp-ts";
import { getAmqConnectionString } from "./utils";

const connection = new Amqp.Connection(getAmqConnectionString())

const topology = {
    exchanges: [
        { name: "exchange-test0", type: "direct", options: { durable: true } },
        { name: "exchange-test1", type: "topic", options: { durable: true } },
        { name: "exchange-test2", type: "direct", options: { durable: true } } 
    ],
    queues: [
        { name: "queue-test0" },
        { name: "queue-test1" },
        { name: "queue-test2" }
    ],
    bindings: [
        { source: "exchange-test0", queue: "queue-test0" },
        { source: "exchange-test1", queue: "queue-test1" },
        { source: "exchange-test2", queue: "queue-test2" }
    ]
}

connection.declareTopology(topology).then(() => { 
    console.log('Topology configuration completed')
})

setTimeout(function() {
    console.log('Closing connection')
    connection.close();
}, 500);
