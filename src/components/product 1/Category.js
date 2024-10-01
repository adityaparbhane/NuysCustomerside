import React from "react";
import { useState, Fragment } from "react";
import { Categories } from "./Categories";
import ReactPaginate from "react-paginate";
import { filterCat } from "./Categories";
import { send } from "emailjs-com";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

import './product.css'

function Category() {
  const [data, setData] = useState(Categories);
  const [pageNumber, setPageNumber] = useState(0);
  const [active, setActive] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [text, setText] = useState("Your choice is here!");
  const [open, setOpen] = React.useState(false);
  const [validateFormName, setValidateFormName] = React.useState(true);
  const [validateToName, setValidateToName] = React.useState(true);
  const [validateFormMassage, setValidateFormMassage] = React.useState(true);
  const [validateFormReplyTo, setValidateFormReplyTo] = React.useState(true);
  const [mobile, setValidatemobile] = React.useState(true);
  const [toSend, setToSend] = useState({
    from_name: "",
    Product: "",
    quantity: "",
    address: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleClickOpen = (title) => {
    setToSend({ ...toSend, Product: title });
    setOpen(true);
  };



  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // return Object.values(toSend).every(item => item)
    if (toSend.from_name) {
      setValidateFormName(true);
    } else {
      setValidateFormName(false);
    }
    if (toSend.Product) {
      setValidateToName(true);
    } else {
      setValidateToName(false);
    }
    if (toSend.quantity) {
      setValidateFormMassage(true);
    } else {
      setValidateFormMassage(false);
    }
    if (toSend.address) {
      setValidateFormReplyTo(true);
    } else {
      setValidateFormReplyTo(false);
    }
    if (toSend.phoneNumber) {
      setValidatemobile(true);
    } else {
      setValidatemobile(false);
    }
  };

  const validateFormInputs = () => {
    validateForm();
    return (
      toSend.quantity && toSend.from_name && toSend.quantity && toSend.address && toSend.phoneNumber
    );
  };

  const getRandomDelay = () => {
    // Logic to generate random delay between 1000ms to 5000ms
    return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {

      setIsLoading(false);
    }, 4000);

    let isValidate = validateFormInputs();
    if (isValidate) {
      send("service_xr65myj", "template_fqclhey", toSend, "PGGK4pIssPbgfua7i")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Congratulation ! You have booked order successfullY. We will contact you soon")
          // alert("your order placed Successfull");
        })
        .catch((err) => {
          console.log("FAILED...", err);
          toast.error('Something went wrong. Please try after some time .');
        });
    }

  };

  const productsPerPage = 200;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(data.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProduct = data
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((value, index) => {
      const { id, title, Image } = value;
      if (value.categoryId === active || !active)
        return (
          <div className="inline-grid  ">
            <div className=" inline-flex xs:mx-0 xs:my-0 xs:w-[110px] mx-2 mt-6 ">
              <div
                key={id}
                className=" inline-grid relative  overflow-hidden bg-cover  md:rounded-[20px]  mx-2 my-4 xs:h-[120px] xs:my-1   h-fit w-[220px] "
              >
                <img className="" src={Image} alt="product img" />
                <div className="px-6 xs:p-1 py-3">
                  <div className="font-semibold text-center text-red-600 xs:text-[10px] text-[15px] mb-2">
                    {title}
                  </div>
                </div>
                <div>
                  <button className='absolute top-[0px] text-white text-md right-0 font-bold h-full w-full overflow-hidden  bg-[rgba(0,0,0,0.6)] opacity-0 transition duration-300 ease-in-out hover:opacity-100' onClick={() => handleClickOpen(title)}>PLACE ORDER </button>
                  {
                    open && (
                      <div className="dialog-overlay  ">
                        <div className="dialog-content">
                          <h2 className="font-bold ">  For order food please fill up these details Which is given</h2>
                          <div>

                            {/* <h1 class="tracking-wide text-3xl text-gray-900">Buy Me a Laptop</h1> */}

                          </div>
                          <form onSubmit={onSubmit}>
                            {/* Add your form fields here */}
                            <input className="mb-3 px-2 py-1.5
         mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" name="from_name" value={toSend.from_name}
                              onChange={handleChange} placeholder="Enter Your Name" type="text" />
                            {!validateFormName && (
                              <p className="text-red-600">Please Enter full name</p>
                            )}
                            <input className="mb-3 px-2 py-1.5
         mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="Product" placeholder="Enter Product Name"
                              value={toSend.Product}
                              onChange={handleChange}
                              disabled />
                            <input className="mb-3 px-2 py-1.5
         mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="number"
                              name="quantity"
                              placeholder="Enter Quantity"
                              value={toSend.quantity}
                              onChange={handleChange} />
                            {!validateFormMassage && (
                              <p className="text-red-600">Please Enter quantity</p>
                            )}
                            <input className="mb-3 px-2 py-1.5
         mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                              type="text"
                              name="address"
                              placeholder="Enter Your Delivery Address With pin code"
                              value={toSend.address}
                              onChange={handleChange} />
                            {!validateFormReplyTo && (
                              <p className="text-red-600">Please Enter your address</p>
                            )}
                            <input className="mb-3 px-2 py-1.5
         mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="number"
                              name="phoneNumber"
                              placeholder="mobile number"
                              value={toSend.phoneNumber}
                              onChange={handleChange}
                            />
                            {!mobile && (
                              <p className="text-red-600">Please Enter your Mobile Number</p>
                            )}
                            <button type="submit">Submit</button>
                            <button className="ml-10" onClick={handleClose}>Close</button>
                          </form>

                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div>  <ToastContainer /></div>

          </div>
        );
    });

  return (
    <div className="bg-light-200">
      <div>
        <LazyLoadImage width="100%" effect="blur" alt="Image" className="w-full" src="Image/retail-banner.jpg" />
        {/* <img className="w-full xs:h-32 " src="Image/retail-banner.jpg"></img> */}
      </div>
      <div className="h-20 xs:h-12 bg-[#082161] ">
        <h1 className="text-3xl xs:text-lg p-4 xs:p-2 font-serif text-white font-bold text-center">
          Our Delicious Flavours
        </h1>
      </div>
      <section className="bg-white">
        <div className="grid grid-cols-8">
          <div className="  md:ml-2  col-span-2">
            <div className="border bg-white">
              <h1 className="text-2xl xs:text-sm p-6 font-medium">
                Filter Category
              </h1>
            </div>

            <div className="bg-white  scrollbar-thin h-[600px] p-4">
              {filterCat.map((item, index) => {
                return (
                  <div
                    className={`flex gap-4  font-semibold  hover:text-light-500 cursor-pointer px-2 py-4 ${active == item.id && "text-light-500"
                      }`}
                    onClick={() => setActive(item.id)}
                  >
                    <img className="w-14 h-10" src={item.Image}></img>
                    <span className="xs:hidden my-auto text-md"> {item.category} </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 bg-light-200">
            <div>
              <section className="">
                <div>
                  {/* <h1 className="text-center xs:text-[26px] font-myFont text-[#082161] text-4xl pt-10" >
                    {text}
                  </h1> */}
                </div>
                <div className="  scrollbar-thin  h-[800px] md:px-12">
                  {displayProduct}
                  <div className="pagi ">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
