//from https://stackoverflow.com/a/59378445

export function throttle(func, timeFrame): Function {
    let lastTime = 0;
    return function (): void {
        const now = Date.now();
        if (now - lastTime >= timeFrame) {
            func();
            lastTime = now;
        }
    };
}

export function addBrightness(color: Array<number>, brightness: number): Array<number> {
    const limit = (x: number): number => Math.min(Math.max(x, 0), 255);
    const transform = (x: number, brightness: number): number => x * (255-brightness)/255 + brightness;

    return color.map((x: number): number => limit(transform(x,brightness)));
}