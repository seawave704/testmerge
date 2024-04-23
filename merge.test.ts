import { merge } from './merge';
import {describe, expect, test} from '@jest/globals';
describe('merge', () => {
  it('merges',() => {
    const collection1 = [1, 2];
    const collection2 = [3, 0]; 
    const collection3 = [2, 6];
    const expected = [1, 2, 3, 0, 2, 6];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
  it('merges same value', () => {
    const collection1 = [3];
    const collection2 = [3]; 
    const collection3 = [3];
    const expected = [3,3,3];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
});