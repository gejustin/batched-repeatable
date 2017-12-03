import * as angular from 'angular';
import { BatchedRepeatableFactory } from './batched-repeatable-factory.service';

export const batchedRepeatableModule = angular
    .module('gj-batched-repeatable', [])
    .service('$batchedRepeatableFactory', BatchedRepeatableFactory);