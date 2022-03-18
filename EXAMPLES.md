## EXAMPLES

#### `getRelTime`

Represent the target date in words relative to the current date. In this example, the current date is `2022-01-01T00:00:00`.

```js
getRelTime(new Date('2020-01-01'), 'en');
//=> 2 years ago

getRelTime(new Date('2021-12-01'), 'en', {
  numeric: 'auto',
});
//=> last month

getRelTime(new Date('2022-01-01T01:00:00'), 'en', {
  numeric: 'auto',
  style: 'narrow',
});
//=> in 1 hr.

getRelTime(new Date('2022-01-02T01:00:00'), 'ru', {
  numeric: 'auto',
});
//=> завтра

getRelTime(new Date('2022 Jan 17'), 'en');
//=> in 3 weeks

getRelTime(new Date(), 'en', {
  numeric: 'auto',
});
//=> now
```
