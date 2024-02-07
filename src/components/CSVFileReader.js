import React, { useState } from 'react';
import Papa from 'papaparse';

const CSVFileReader = ({ onFileLoaded }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        onFileLoaded(result.data);
      },
    });
  };

  return (
    <input type="file" onChange={handleFileChange} />
  );
};

export default CSVFileReader;