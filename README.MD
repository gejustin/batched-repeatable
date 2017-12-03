# gj-batched-repeatable
Small AngularJS library for easy batching of ng-repeat renders. Heavily inspired by [Todd Motto](https://github.com/toddmotto).

**Notes:**
  1. This project is currently under development and is not recommended for production use.
  2. Public API has potential to change.

## Usage

### Import into your application

```TypeScript
    import 'gj-batched-repeatable';

    angular.module('your.module', ['gj-batched-repeatable'])
```

### Create a BatchedRepeatable from your collection

```TypeScript
import { BatchedRepeatable, BatchedRepeatableFactory } from 'gj-batched-repeatable';

export class MyController {

    public static $inject = ['$batchedRepeatableFactory'];

    public collection: BatchedRepeatable<T>

    constructor(private $batchedRepeatableFactory: BatchedRepeatableFactory) {
        this.collection = $$batchedRepeatableFactory.create([/*large collection*/], /* Batch Size */ 10);
    }
}
```

### Use batched version in your ng-repeat

```html
<ul>
    <li ng-repeat="item in $ctrl.collection.batched track by $index"><li>
</ul>
```
