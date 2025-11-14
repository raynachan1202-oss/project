export const formatViewCount = (views) => {
    
    // 確保 views 是數字，並且大於等於 0
    const count = Number(views);
    if (isNaN(count) || count < 0) return '0';
  
    // 1 億
    if (count >= 100000000) {
        // Math.floor(count / 100000000 * 10) / 10 用來保留一位小數，例如 1.2 億
        return `${Math.floor(count / 100000000 * 10) / 10} 億`; 
    }
    // 1 萬
    if (count >= 10000) {
        return `${Math.floor(count / 10000 * 10) / 10} 萬`;
    }
    // 1 千
    if (count >= 1000) {

        // 使用 localeString 讓數字帶千分位逗號，例如 1,234
        return count.toLocaleString('en-US'); 
    }
  
    return String(count);
};