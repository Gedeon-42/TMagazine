const HandLayout = ({ children }) => {
  return (
    <div className="category-wrapper">
      <div className="category-heading">
        <h2>handball</h2>
        <p>
          home &gt;<span>handball</span>
        </p>
      </div>
      {children}
    </div>
  );
};
export default HandLayout;
