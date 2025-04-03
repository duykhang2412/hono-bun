import { pino } from 'pino';
function getLogger(level = 'info') {
    let logger;
    if (!logger) {
        logger = pino({
            level: level,
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                },
            },
        });
    }
    return logger;
}
export { getLogger };
