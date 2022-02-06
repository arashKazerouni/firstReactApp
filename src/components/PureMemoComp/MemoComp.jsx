import react from "react";

const MemoComp = (props) => {
    console.log('memo comp');
    return ( 
        <div>
            memo comp - {props.name}
        </div>
     );
}
 
export default react.memo(MemoComp);