import { createContext, useContext, useEffect, useState } from "react";

export const FetchContext = createContext({});

export const FetchProvider = ({ children }) => {
  // 🎯 修正：初始狀態設定為 null，並加入載入和錯誤狀態
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 放部署後得到的URL
    const apiUrl = 'https://script.google.com/macros/s/AKfycbweUdP_4aH8K5LstDtdUZGv0LhcktRIam2sl9W3mFHgV4KgrdomnMh5JoL79S7BApHByQ/exec'; 
    
    const fetchAllData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(apiUrl, { method: 'GET' });
        
        if (!response.ok) {
          throw new Error(`HTTP 錯誤! 狀態碼: ${response.status}`);
        }
        
        const result = await response.json();
        
        setData(result); 
        console.log("數據載入成功:", result);

      } catch (err) {
        console.error('API 錯誤:', err);
        setError(err.message);
        setData({ eachVideos: [], Messages: [], relateTabs: [] }); 
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAllData(); 
  }, []);


  return (
    <FetchContext.Provider value={{ data, isLoading, error }}>
        {children}
    </FetchContext.Provider>
  );
};

export const FetchUseContext = () => useContext(FetchContext);