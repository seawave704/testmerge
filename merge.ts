export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const merged: number[] = [];
    merged.push(...collection1);
    merged.push(...collection2); 
    merged.push(...collection3);
    return merged;
  }