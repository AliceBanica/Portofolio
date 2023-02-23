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
    <div>
        {loading && (
            <div  className='container-loading'>
                <div className="loader-container">
                    <div className='balloons-container-4-loading'>
                            <div className='color-b4-4 balloon-4'></div>
                            <div className='color-b4-5 balloon-5'></div>
                            <div className='color-b4-1 balloon-1'></div>
                            <div className='color-b4-2 balloon-2'></div>
                            <div className='color-b4-3 balloon-3'></div>
                            <div className='balloon-fire'></div>
                            <div className='balloon-cord-left'></div>
                            <div className='balloon-cord-right'></div>
                            <div className='color-b4-basket balloon-basket'></div>
                    </div>
                    <div className='loading-text'>Loading...</div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Loading
