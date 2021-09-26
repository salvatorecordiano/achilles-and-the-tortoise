export const getAmqConnectionString = (): string => {
        return `amqp://${process.env.RABBITMQ_USERNAME}:`+
        `${process.env.RABBITMQ_PASSWORD}@` + 
        `${process.env.RABBITMQ_HOSTNAME}:` + 
        `${process.env.RABBITMQ_PORT}`
}

export function sleep (time: number) {
        return new Promise((resolve) => setTimeout(resolve, time));
}
