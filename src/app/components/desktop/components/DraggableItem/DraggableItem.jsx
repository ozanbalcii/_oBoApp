// DraggableItem.js
import React, { useState, useRef } from 'react';
import '../css/DraggableItem.css' 
import Linkedin from "../../../../pages/applications/linkedin/Linkedin";

const DraggableItem = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const initialX = e.clientX - position.x;
    const initialY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);s
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      
    </div>
    // <div
    //   ref={dragRef}
    //   className={`draggable-item ${isDragging ? 'dragging' : ''}`}
    //   style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    //   onMouseDown={handleMouseDown}
    // >
    // hello
    // </div>
  );
};

export default DraggableItem;