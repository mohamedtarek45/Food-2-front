import { outfit } from "@/fonts";
import Stars from "./Stars";

const RatingSection = () => {
  return (
    <div>
      <h2 className={`${outfit.className} text-[20px] font-semibold`}>
        Rating
      </h2>
      <div className="space-y-3 mt-5">
        {[5, 4, 3, 2, 1].map((rating) => (
          <label
            key={rating}
            className="flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-1">
              <Stars numStars={rating} starClass="size-6" showOther={false} />
            </div>
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
