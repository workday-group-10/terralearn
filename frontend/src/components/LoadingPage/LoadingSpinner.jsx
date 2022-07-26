import React from "react";
import "./LoadingSpinner.css";
export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <div className="text-info">Gathering Map Resources. Give us a Few Moment</div>
    </div>
  );
}