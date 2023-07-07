export const formatTime = (minutes: number): string => {
  return minutes >= 60
    ? `${Math.floor(minutes / 60)}H ${minutes % 60} Minutes`
    : `${minutes}-${minutes + 10} Minutes`;
};
