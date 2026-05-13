import Image from "next/image";

const CustomerReviewCard = ({item}) => {
    return (
        <div>
            <div className="max-w-2xl rounded-3xl border border-gray-300 bg-[#f7f7f7] p-6 shadow-sm h-50">
      
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={item.customerImage}
          height={100}
          width={100}
          alt="Ayesha Khan"
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {item.customerName}
          </h3>
          <p className="text-gray-500">Banker</p>
        </div>
      </div>

      <p className="text-xs  text-gray-600">
        {item.review}
      </p>

    </div>
        </div>
    );
};

export default CustomerReviewCard;