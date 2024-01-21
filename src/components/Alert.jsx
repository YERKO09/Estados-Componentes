const Alert = ({ children, color }) => {
  return (
    <>
      <div className={`alert alert-${color} my-2`} style={{fontWeight:'700'}}>{children}</div>
    </>
  );
};

export default Alert