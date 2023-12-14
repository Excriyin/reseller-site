const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full md:w-[354px] h-[366px]">
      <div className="relative z-10 px-3 py-7 pb-12 rounded-3xl wow fadeInUp border-[1px] border-primary shadow-signUp">
        <div className="mx-5 rounded-2xl wow fadeInUp" data-wow-delay=".15s">
          <div className="flex justify-center">
              <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md  bg-opacity-10 text-primary">
                {icon}
              </div>
          </div>
            <h3 className="mb-6 text-xl text-center text-white power sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-center text-[#CDC9C9]">
              {paragraph}
            </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
