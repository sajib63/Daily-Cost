import React from 'react';



const SerachBox = () => {
    const date = new Date();
    return (
        <div
          className="container mx-auto bg-white shadow-2xl flex justify-center mt-5 p-5 z-50 
                 overflow-auto "
          data-aos="fade-up-right">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <input
              type="text"
              className="border-0"
              disabled
              name=""
              value={date}
              id=""
            />
            <div className="mx-2">
              <select className="select w-full border-black">
                <option disabled selected>
                  Month
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div>
              <select className="select w-full border-black">
                <option disabled selected>
                  Travel Type
                </option>
                <option>Sea</option>
                <option>Wild</option>
                <option>River</option>
                <option>Guard</option>
                <option>City</option>
              </select>
            </div>
            <input
              type="submit"
              value="Search"
              className="btn bg-sky-500 border-0 mx-2"
            />
          </form>
        </div>
    );
};

export default SerachBox;