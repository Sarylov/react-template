interface IProps {
  id: number;
  className?: string;
  rating: number;
}

export const Rating: React.FC<IProps> = ({ id, className = "", rating }) => {
  return (
    <div className={`rating rating-sm sm:rating-md ${className}`}>
      <input
        type="radio"
        name={"rating-" + id}
        className={` mask mask-star-2 ${
          rating >= 1 ? "bg-primary" : "bg-gray-400"
        }`}
        readOnly
      />
      <input
        type="radio"
        name={"rating-" + id}
        className={` mask mask-star-2 ${
          rating >= 2 ? "bg-primary" : "bg-gray-400"
        }`}
        readOnly
      />
      <input
        type="radio"
        name={"rating-" + id}
        className={` mask mask-star-2 ${
          rating >= 3 ? "bg-primary" : "bg-gray-400"
        }`}
        readOnly
      />
      <input
        type="radio"
        name={"rating-" + id}
        className={` mask mask-star-2 ${
          rating >= 4 ? "bg-primary" : "bg-gray-400"
        }`}
        checked={rating === 1}
        readOnly
      />
      <input
        type="radio"
        name={"rating-" + id}
        className={` mask mask-star-2 ${
          rating >= 5 ? "bg-primary" : "bg-gray-400"
        }`}
        readOnly
      />
    </div>
  );
};
