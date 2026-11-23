function recent7(records, today) {
  const todayDate = new Date(today + 'T00:00:00');
  const sevenDaysAgo = new Date(todayDate);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  let minutes = 0;
  let count = 0;

  for (const record of records) {
    if (!record || typeof record.log_date !== 'string') {
      continue;
    }

    const logDate = new Date(record.log_date + 'T00:00:00');
    if (isNaN(logDate.getTime())) {
      continue;
    }

    if (logDate < sevenDaysAgo || logDate > todayDate) {
      continue;
    }

    count++;

    if (typeof record.minutes === 'number' && record.minutes >= 0) {
      minutes += record.minutes;
    }
  }

  return { minutes, count };
}
