import React from 'react';
import { useState, useEffect } from 'react';
import "./Loading.css";

function Loading() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

  return (
    <div className='container-loading'>
    {loading && (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
    )}
    </div>
  )
}

export default Loading
