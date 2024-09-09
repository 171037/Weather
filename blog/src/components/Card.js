import React from 'react';
import '../App.css';

function Card({ temp }) {
  let warningMessage;

  if (temp <= 0) {
    warningMessage = "너무 추워요";
  } else if (temp > 0 && temp <= 15) {
    warningMessage = "시원합니다";
  } else if (temp > 15 && temp <= 30) {
    warningMessage = "좋은 날씨입니다";
  } else {
    warningMessage = "너무 덥습니다. 양산 사용을 추천합니다.";
  }

  return (
    <div className="card-wrapper">
      <h3>날씨 정보</h3>
      <p>{warningMessage}</p>
    </div>
  );
}

export default Card;
