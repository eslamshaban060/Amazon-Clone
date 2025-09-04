// app/product/loading.tsx
export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Image skeleton */}
        <div className="col-span-2 flex justify-center items-center">
          <div className="bg-gray-300 rounded-md h-72 w-72"></div>
        </div>

        {/* Details skeleton */}
        <div className="col-span-3 space-y-4">
          {/* Brand */}
          <div className="h-4 bg-gray-300 rounded w-32"></div>

          {/* Title */}
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>

          {/* Rating */}
          <div className="h-5 bg-gray-300 rounded w-40"></div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-300 w-full"></div>

          {/* Price */}
          <div className="h-8 bg-gray-300 rounded w-28"></div>
          <div className="h-4 bg-gray-300 rounded w-40"></div>

          {/* Discount */}
          <div className="h-5 bg-gray-300 rounded w-56"></div>

          {/* Icons section */}
          <div className="flex gap-6 mt-4">
            <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
            <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-300 w-full"></div>

          {/* About item */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
