export class BatchedRepeatable<T> {

    private dispatched = false;

    private batchedCollection: T[][] = [];

    private dispatchedCollection: T[] = [];

    public get raw(): T[] {
        return this.collection;
    }

    public get batched(): T[] {
        if (!this.dispatched) {
            this.batchCollection();
            this.dispatched = true;
            let nextBatch;
            let promise = Promise.resolve();

            this.batchedCollection.forEach(batch => {
                nextBatch = this.dispatchNext.bind(this, batch);
                promise = promise.then(nextBatch);
            });
        }

        return this.dispatchedCollection;
    }

    constructor(
        private collection: T[],
        private batchSize = 10,
        private onDispatch?: { (batch: T[]): ng.IPromise<void> }
    ) {
        if (!collection || !Array.isArray(collection)) {
            throw new Error('new BatchedRepeatable must be initialized with a valid collection.');
        }
    }

    private batchCollection() {
        for (let i = 0; i < this.collection.length; i += this.batchSize) {
            this.batchedCollection.push(this.collection.slice(i, i + this.batchSize));
        }
    }

    private dispatchNext() {
        const batch = this.batchedCollection.shift();
        this.dispatchedCollection.push(...batch);

        return this.onDispatch(batch);
    }
}