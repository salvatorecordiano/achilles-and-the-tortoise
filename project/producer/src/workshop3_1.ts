import { sleep } from "./utils";

// 1/2 + 1/4 + 1/8 + 1/16 + ... = 1

let space = 0;
let time = 2;

async function main() {
    while(true) {
        console.log(`Time ${time} - Space ${space}`);
        space += (1/time);
        time *= 2;
        await sleep(1000);
    }
}

main();
