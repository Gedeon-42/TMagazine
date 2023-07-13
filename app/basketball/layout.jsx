const BasketLayout = ({ children }) => {
  return (
    <div className="category-wrapper">
      <div className="category-heading">
        <h2>Basketball</h2>
        <p>
          home &gt;<span>basketball</span>
        </p>
      </div>
      {children}
    </div>
  );
};
export default BasketLayout;
