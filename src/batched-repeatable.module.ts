import { BatchedRepeatableFactory } from './batched-repeatable-factory.service';

export const moduleFactory = (angular: ng.IAngularStatic) => angular
    .module('gj-batched-repeatable', [])
    .service('$batchedRepeatableFactory', BatchedRepeatableFactory);