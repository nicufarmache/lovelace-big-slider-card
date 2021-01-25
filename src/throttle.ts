//from https://stackoverflow.com/a/59378445

export default function throttle(func, timeFrame): Function {
    let lastTime = 0;
    return function (): void {
        const now = Date.now();
        if (now - lastTime >= timeFrame) {
            func();
            lastTime = now;
        }
    };
}