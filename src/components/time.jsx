export const formatRelativeTime = (uploadedTime) => {
  if (!uploadedTime) return '未知時間';

  const uploadedDate = new Date(uploadedTime);
  const now = new Date();

  // 計算時間差 (毫秒)
  const diffInMs = now - uploadedDate;

  // 如果時間是未來時間或無效時間，則返回原始字串或錯誤提示
  if (diffInMs < 0 || isNaN(uploadedDate.getTime())) {
    return uploadedTime;
  }
  
  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44); // 平均每月天數
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} 年前`;
  }
  if (months > 0) {
    return `${months} 個月前`;
  }
  if (weeks > 0) {
    return `${weeks} 週前`;
  }
  if (days > 0) {
    return `${days} 天前`;
  }
  if (hours > 0) {
    return `${hours} 小時前`;
  }
  if (minutes > 0) {
    return `${minutes} 分鐘前`;
  }
  return '幾秒前';
};
