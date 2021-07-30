// Q3. Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
// You may assume that the intervals were initially sorted according to their start times.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get value() {
    return [this.start, this.end];
  }
}

function mergeIntervals(intervalList, newInterval) {
  let i = 0;
  const len = intervalList.length;
  const res = [];

  // Push intervals where the "end" is less than newInterval's "start"
  while (i < len && intervalList[i].end < newInterval.start) {
    res.push(intervalList[i]);
    i++;
  }

  // Merging:
  // For each interval whose "start" is less than or equal to newInterval's "end",
  // get the min start and the max end of the two and make them newInterval's "start" and "end"
  while (i < len && intervalList[i].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervalList[i].start);
    newInterval.end = Math.max(newInterval.end, intervalList[i].end);
    i++;
  }
  // Push the merged interval
  res.push(newInterval);

  // Push remaining intervals
  while (i < len) {
    res.push(intervalList[i]);
    i++;
  }

  return res;
}

// Test #1: Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

const intervalList1 = [new Interval(1, 3), new Interval(6, 9)];
const newInterval1 = new Interval(2, 5);
console.log(mergeIntervals(intervalList1, newInterval1).map(i => i.value));

// Test #2: Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

const intervalList2 = [new Interval(1, 2), new Interval(3, 5), new Interval(6, 7), new Interval(8, 10), new Interval(12, 16)];
const newInterval2 = new Interval(4, 9);
console.log(mergeIntervals(intervalList2, newInterval2).map(i => i.value));