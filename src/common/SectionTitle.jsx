import React from 'react';

const SectionTitle = ({
  title,
  paragraph,
  width = "270px",
  center,
  mb = "50px",
}) => {
  return (
    <>
      <div
        className={`px-4 wow fadeInUp w-full ${center ? "text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight  text-white sm:text-3xl md:text-[45px] power">
          {title}
        </h2>
        <p className="text-xs !leading-relaxed text-body-color md:text-base">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
