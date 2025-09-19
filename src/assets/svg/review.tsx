import StarIcon from "./star";

export default function ReviewBlock({
  rating,
  reviews,
  logo,
}: {
  rating: string;
  reviews: string;
  logo: React.ReactNode;
}) {
  return (
    <div className="py-5">
      {/* Stars */}
      <div className="flex gap-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Rating */}
      <p className="mt-3 text-sm text-gray-800 dark:text-neutral-200">
        <span className="font-bold">{rating}</span> /5 – from {reviews} reviews
      </p>

      {/* Logo */}
      <div className="mt-5">{logo}</div>
    </div>
  );
}
