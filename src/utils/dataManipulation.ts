const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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

export {
  capitalizeFirstLetter,
  provideJobPostingTime
};
