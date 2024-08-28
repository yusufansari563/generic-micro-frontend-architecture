import React, { useState, useRef } from "react";

const DraggableIframe: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleDragStart = (event: React.DragEvent<HTMLIFrameElement>) => {
    event.dataTransfer.setData("text/plain", "");
  };

  const handleDrag = (event: React.DragEvent<HTMLIFrameElement>) => {
    if (event.clientX === 0 && event.clientY === 0) return; // Prevent error on drag end

    setPosition({
      top: event.clientY,
      left: event.clientX,
    });
  };

  const handleDragEnd = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.style.top = `${position.top}px`;
      iframe.style.left = `${position.left}px`;
    }
  };

  return (
    <div
      className="animate__animated animate__delay-1s animate__fadeInUp animate__faster"
      data-visible="true"
      ref={iframeRef}
      style={{
        width: "90px",
        height: "90px",
        position: "fixed",
        zIndex: 99999999,
        left: `${position.left}px`,
        top: `${position.top}px`,
        border: "0px",
        userSelect: "none",
      }}
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      id="floating-btn"
    >
      <iframe
        src="http://localhost:4201/#/yono_login"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </div>
  );
};

export default DraggableIframe;
