
const Wrapper = (WrappedComponent, className) => {
  return (props) => {
      console.log(props)
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    );
  };
};

export default Wrapper;
