import { FaStar } from "react-icons/fa";

const  Stars = ({numStars  ,showOther = true ,className ,starClass}) => {
  return (
    <div className={`flex justify-center gap-2.5 w-fit ${className}`}>
        {Array(numStars).fill(0).map((_, i) => (
          <FaStar color="#FFBB15" key={i}  className={`${starClass}`} />
        ))}
        {showOther && Array(5 - numStars).fill(0).map((_, i) => (
          <FaStar color="#CCCCCC" key={i}  className={`${starClass}`} />
        ))}
    </div>
  );
};

export default  Stars;