import { BatchedRepeatable } from "./batched-repeatable.class";

export class BatchedRepeatableFactory {

    public static $inject = ['$timeout'];

    constructor(private $timeout: ng.ITimeoutService) { }

    public create<T>(collection: T[], batchSize?: number) {
        return new BatchedRepeatable<T>(collection, batchSize, this.onDispatch.bind(this));
    }

    private onDispatch<T>(batch: T[]) {
        return this.$timeout(() => { }, 0);
    }
}
