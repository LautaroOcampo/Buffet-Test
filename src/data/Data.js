import React, { useState, useEffect } from 'react';

export const Data = () => {
    let [data, setData] = useState([])
      useEffect(() =>{
    
        const getData = async () => {
        const spreadsheetId = '1QHvnb_blMdFI2EdmKlHWtnV5LoJNDgSMo_YWVH5-7Wc';
        const apiKey = 'AIzaSyCMtUoV78NoyW_V1O9kPuYXJVBjD6srT3c';
    
        try {
          const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/?key=${apiKey}&includeGridData=true`);
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
    
          const responseData = await response.json();
          setData(responseData);

        } catch (error) {
          console.error(error);
        }
      }
      getData()
      },[])

      return data
}
