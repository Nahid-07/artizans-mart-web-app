const CommonButton = ({children}) => {
  return (
    <button className="bg-orange-500 py-2 mt-3 px-3 text-white rounded">
      {children}
    </button>
  );
};

export default CommonButton;
