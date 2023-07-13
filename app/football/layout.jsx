const FootLayout = ({ children }) => {
  return (
    <div className="category-wrapper">
      <div className="category-heading">
        <h2>football</h2>
        <p>
          home &gt;<span>football</span>
        </p>
      </div>
      {children}
    </div>
  );
};
export default FootLayout;
