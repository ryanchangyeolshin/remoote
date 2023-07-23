const provideJobPostingTime = (date: string): string => {
  const currentDate = new Date();
  const postDate = new Date(date);

  const timeDifference = Math.floor((currentDate.getTime() - postDate.getTime()) / 1000);

  const secondsInAMinute = 60;
  const secondsInAnHour = 60 * secondsInAMinute;
  const secondsInADay = 24 * secondsInAnHour;
  const secondsIn30Days = 30 * secondsInADay;

  if (timeDifference < secondsInAnHour) {
    const hoursAgo = Math.floor(timeDifference / secondsInAMinute);
    return `Posted ${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDifference < secondsInADay) {
    const daysAgo = Math.floor(timeDifference / secondsInAnHour);
    return `Posted ${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  } else if (timeDifference < secondsIn30Days) {
    const postDay = postDate.getDate();
    const postMonth = postDate.toLocaleString('default', { month: 'long' });
    return `Posted on ${postMonth} ${postDay}`;
  } else {
    return `Posted on ${postDate.toLocaleDateString()}`;
  }
};

const provideSalary = (min: number | null, max: number | null, currency: string | null): string | null => {
  if (min === null && max === null) {
    return null;
  }

  if (min !== null && max === null) {
    return `Salary: ${min} ${currency}`;
  }

  if (min === null && max !== null) {
    return `Salary: ${max} ${currency}`;
  }

  return `Salary: ${min} ${currency} - ${max} ${currency}`;
};

const provideLocation = (city: string | null, state: string | null, country: string | null): string | null => {
  const locationParts = [];

  if (city != null) {
    locationParts.push(city);
  }

  if (state != null) {
    locationParts.push(state);
  }

  if (country != null) {
    locationParts.push(country);
  }

  if (locationParts.length === 0) {
    return null;
  }

  return locationParts.join(', ');
};

export {
  provideJobPostingTime,
  provideSalary,
  provideLocation
};
