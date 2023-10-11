'use client'

import '../loading-snake.css';

export default function LoadingSnake() {
    return(
        <div className="loadingSnake">
            <div className="dot-row-t dot-one"></div>
            <div className="dot-row-t dot-two"></div>
            <div className="dot-row-r dot-one"></div>
            <div className="dot-row-r dot-two"></div>
            <div className="dot-row-b dot-one"></div>
            <div className="dot-row-b dot-two"></div>
            <div className="dot-row-l dot-one"></div>
            <div className="dot-row-l dot-two"></div>
        </div>
    );
}