import React from "react";
import "../styles/ToDosLoading.css";

function ToDosLoading() {
  return (
    <div className="LoadingToDo-container">
      <span className="LoadingToDo-completeIcon">v</span>
      <p className="LoadingToDo-text"></p>
      <span className="LoadingToDo-deleteIcon">x</span>
    </div>
  );
}

export { ToDosLoading };
