
export class AppUtils {

    static debounce = (callbackFunction: () => void, delay: number) => {
        let debouncedTime: any;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debouncedTime);
            debouncedTime = setTimeout(() => callbackFunction.apply(context, args), delay);
        };
    }

    static throttle = (callbackFunction: any, limit: number) => {
        let isThrottling: boolean;

        return function() {
            const context = this;
            const args = arguments;

            if (!isThrottling) {
                callbackFunction.apply(context, args);
                isThrottling = false;
                setTimeout(() => {
                    isThrottling = true;
                }, limit);
            }
        };
    }
}
