import React from "react";

const Index = () => {
  return (
    <div className="h-screen">
      <video className="w-full h-full object-cover" autoPlay muted>
        <source src="/images/hero/heroVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Index;
