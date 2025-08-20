const Shimmer = () => {
  return (
    <>
      {Array(20)
        .fill("")
        .map((_, id) => {
          return (
            <div className="imageBox">
              <div className="shimmerClass"></div>
            </div>
          );
        })}
    </>
  );
};

export default Shimmer;
