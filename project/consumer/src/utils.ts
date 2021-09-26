export const getAmqConnectionString = (): string => {
        return `amqp://${process.env.RABBITMQ_USERNAME}:`+
        `${process.env.RABBITMQ_PASSWORD}@` + 
        `${process.env.RABBITMQ_HOSTNAME}:` + 
        `${process.env.RABBITMQ_PORT}`
}