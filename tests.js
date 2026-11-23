// 規則 1：最近 7 天＝今天加上往前 6 天，兩端都包含

addCase({
  name: '規則 1：今天的紀錄要算',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-23', minutes: 30 }
  ],
  expect: { minutes: 30, count: 1 }
});

addCase({
  name: '規則 1：往前第 6 天的紀錄要算',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-17', minutes: 20 }
  ],
  expect: { minutes: 20, count: 1 }
});

addCase({
  name: '規則 1：往前第 7 天的紀錄不算',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-16', minutes: 20 }
  ],
  expect: { minutes: 0, count: 0 }
});

// 規則 2：只計算 log_date 落在範圍內的紀錄

addCase({
  name: '規則 2：範圍內的多筆紀錄都要算',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-17', minutes: 10 },
    { log_date: '2026-11-20', minutes: 15 },
    { log_date: '2026-11-23', minutes: 5 }
  ],
  expect: { minutes: 30, count: 3 }
});

addCase({
  name: '規則 2：太早和太晚的紀錄都不算',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-16', minutes: 30 },
    { log_date: '2026-11-18', minutes: 25 },
    { log_date: '2026-11-24', minutes: 40 }
  ],
  expect: { minutes: 25, count: 1 }
});

// 規則 3：minutes 為有效數字才加總，不包含負數

addCase({
  name: '規則 3：minutes 是 0 要算一筆，加 0 分鐘',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-23', minutes: 0 }
  ],
  expect: { minutes: 0, count: 1 }
});

addCase({
  name: '規則 3：minutes 是 null 不加總也不算筆數',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-23', minutes: null }
  ],
  expect: { minutes: 0, count: 0 }
});

addCase({
  name: '規則 3：minutes 是負數、文字或小數都不算',
  today: '2026-11-23',
  records: [
    { log_date: '2026-11-23', minutes: -10 },
    { log_date: '2026-11-22', minutes: 'abc' },
    { log_date: '2026-11-21', minutes: 12.5 },
    { log_date: '2026-11-20', minutes: 8 }
  ],
  expect: { minutes: 8, count: 1 }
});
