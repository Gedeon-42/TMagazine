const VolleyLayout = ({ children }) => {
  return (
    <div className="category-wrapper">
      <div className="category-heading">
        <h2>volleyball</h2>
        <p>
          home &gt;<span>volleyball</span>
        </p>
      </div>
      {children}
    </div>
  );
};
export default VolleyLayout;
