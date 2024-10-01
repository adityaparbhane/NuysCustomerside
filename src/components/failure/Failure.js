import { useNavigate, useLocation } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div className="mt-40 mb-20 item-center justify-center mx-auto text-center">
      <h1 className="text-3xl font-bold text-red-600 ">
        Sorry payment failed!
      </h1>
      <div className="bg-green-400 text-2xl lg:hidden mx-auto my-6  px-4 py-4 rounded-full w-20 text-white"></div>

      <div className="flex item-center justify-center gap-4 ">
        <div className="bg-white border-2 border-black text-2xl hidden lg:block px-4 py-4 rounded-full text-white">
          ❌
        </div>
        <p className="my-auto md:flex mx-6 lg:mx-0 text-2xl">
          Failed to place order with order ID
          {/* <p className="text-3xl ml-2 font-bold text-green-600">{orderId}</p> */}
        </p>
      </div>
      <button
        className="text-black bg-red-400 text-xl font-semibold border-2 rounded-xl border-yellow-600 px-4 py-2 mt-4 hover:bg-red-100 "
        onClick={handleNavigate}
      >
        Try Again
      </button>
    </div>
  );
};

export default Failure;
