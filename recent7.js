function recent7(records, today) {
  const todayDate = new Date(today + 'T00:00:00Z');
  const startDate = new Date(todayDate);
  startDate.setUTCDate(startDate.getUTCDate() - 6);

  let minutes = 0;
  let count = 0;

  for (const record of records) {
    if (!record || typeof record.log_date !== 'string') {
      continue;
    }

    const logDate = new Date(record.log_date + 'T00:00:00Z');

    if (
      isNaN(logDate.getTime()) ||
      logDate < startDate ||
      logDate > todayDate
    ) {
      continue;
    }

    const value = record.minutes;

    if (!Number.isInteger(value) || value < 0) {
      continue;
    }

    minutes += value;
    count += 1;
  }

  return { minutes: minutes, count: count };
}
