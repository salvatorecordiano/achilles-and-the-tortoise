import * as Amqp from "amqp-ts";
import { getAmqConnectionString } from "./utils";

let connection = new Amqp.Connection(getAmqConnectionString())

var topology = {
    exchanges: [
        { name: "exchange-test1", type: "direct", options: { durable: true } },
        { name: "exchange-test2", type: "topic" },
        { name: "exchange-zeno-paradox", type: "direct", options: { durable: true } } 
    ],
    queues: [
        { name: "queue-test1" },
        { name: "queue-test2" }
    ],
    bindings: [
        { source: "exchange-test1", queue: "queue-test" },
        { source: "exchange-test2", queue: "queue-test2" }
    ]
}

connection.declareTopology(topology).then(() => { 
    console.log('Topology configuration completed')
    process.exit(0)
})
