// CommonNinjaWidget.js
import React, { useEffect } from 'react';

const CommonNinjaWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="commonninja_component pid-fb57d15d-4c60-46b0-9b08-149bcf73f689" style={{ 
      backgroundColor: '#f0f0f0', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
    }}>
      {/* You can remove or adjust the comment here */}
      {/* Content of the CommonNinjaWidget */}
    </div>
  );
};

export default CommonNinjaWidget;
