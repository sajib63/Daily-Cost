import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../Assets/greeting from paris.png";

const ChoseYourPerfectHoliday = () => {
    return (
        <div>
             <div className="container mx-auto gallery mt-16 mb-16" >
        <div>
          <section className="py-6  text-gray-50">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
              <Link className=" rounded shadow-sm">
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    src="https://i.ibb.co/Dw2rxmg/pexels-asad-photo-maldives-1591370.jpg"
                    alt=""
                    className=" w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className="hiddenText-3  hiddenText flex justify-between  mx-5 ">
                      <div>
                        <h1 className="text-sm lg:text-3xl font-semibold text-white">
                          Spain
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm lg:text-3xl text-white">
                          $2780
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="aspect-square">
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl rounded-full">
                  <img
                    alt=""
                    className="w-full  rounded-full h-full  shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/McyWGNc/tarragona.jpg"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-2 flex justify-between mx-5 gap-3">
                      <div className="mx-2">
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Tarragona
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $1980
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/2Nxydyf/pexels-marek-piwnicki-10050574.jpg"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-3 flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Madrid
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $1680
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/PzZrhgH/pexels-pixabay-41004.jpg"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-3 flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Barcelona
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $3780
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/JdGmZjd/pexels-ibadah-mimpi-3283186.jpg"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-3 flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Tainan
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $1880
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/FmYFxbY/pexels-julius-silver-753626.jpg"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-3 flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Taiwan
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $1280
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/PCGBxy0/pexels-tom-fisk-2213443.jpg"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-3 flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Kaohsiung
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $1380
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden rounded-full transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/6017chs/pexels-francesco-ungaro-409127.jpg"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-2 flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Taipei
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $1200
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link>
                <div className="relative overflow-hidden rounded-full transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    alt=""
                    className="w-full h-full  shadow-sm min-h-48 bg-gray-500 aspect-square"
                    src="https://i.ibb.co/4WRxdPM/pexels-pixabay-315191.jpg"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className=" hiddenText-2 flex justify-between mx-5 gap-3">
                      <div className="mx-2">
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Bali
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $4780
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="">
                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                  <img
                    src="https://i.ibb.co/DtP7xmm/pexels-pixabay-219692.jpg"
                    alt=""
                    className="w-full h-full  rounded shadow-sm min-h-96  bg-gray-500 aspect-square"
                  />

                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                    <div className="hiddenText-3 hiddenText flex justify-between mx-5 gap-3">
                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">
                          Ubud
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm md:text-sm lg:text-2xl text-white">
                          $6780
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>

        {/* paris img  */}
        <div className="my-6 justify-center items-center text-center flex ">
        <img src={image} alt="" />
      </div>
        </div>
    );
};

export default ChoseYourPerfectHoliday;