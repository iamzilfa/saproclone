const Wrapper = ({ styles, children }) => {
  return (
    <div
      className={`max-w-[92.5rem] px-[120px] container mx-auto w-full ${styles}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
