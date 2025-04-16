import "./CafeList.css";
import Cafe from "../Cafe/Cafe";

// rsc + Tab ====> gives you a snippet of the component

const CafeList = ({ cafeDatas }) => {



  return (
    <div className="cafe-list">
      { cafeDatas.map(cafeData => <Cafe key={cafeData.title} cafeData={cafeData} />)}
      {/* <Cafe cafeData={cafeDatas[0]}/>
      <Cafe cafeData={cafeDatas[1]}/>
      <Cafe cafeData={cafeDatas[2]}/> */}
    </div>
  );
};

export default CafeList;
