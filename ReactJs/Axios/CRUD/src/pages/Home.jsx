import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  let [state, setState] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = state.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(state.length / perPage);

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filterData.slice(indexOfFirstData, indexOfLastData);

  const peginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1 , totalPages));
  };

  const PrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  async function componentDidMount() {
    // let url = 'http://localhost:3000/User'
    let data = await fetch("http://localhost:3000/users");
    let Data = await data.json();
    setState(Data);
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "add";
    navigate(path);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((reponse) => {
        loadUser();
      })
      .catch((error) => {
        console.log(error, "error data");
      });
  };

  return (
    <div className="w-full">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="mx-auto w-full max-w-7xl  px-4 py-4 ">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex w-full  max-md:block  justify-between items-center">
            <h2 className="text-lg font-semibold">Employees Details</h2>
            <input
              type="search"
              placeholder="Search"
              id="search"
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" max-lg:mt-2 border-[1px] border-gray-300 rounded-md px-5 py-2 outline-none"
            />
            <br className="lg:hidden" />
            <button
              type="button"
              onClick={routeChange}
              className="rounded-md bg-black max-md:mt-2 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col ml-14">
          <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg ">
                <table className=" table-fixed  divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Username</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Profession
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        &nbsp;
                      </th>
                    </tr>
                  </thead>
                  {currentData.map((element , ind) => (
                    <tbody
                      className="divide-y divide-gray-200 bg-white"
                      key={ind}
                    >
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={element.image}
                                alt={element.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm  text-gray-900">
                                {element.username}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm font-medium text-gray-900 ">
                            {element.name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {element.age}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="text-sm">{element.phone}</span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="text-sm">{element.city}</span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <span className="text-sm">{element.profession}</span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <span className="text-sm">{element.gender}</span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-[16px] font-medium">
                          <Link to={`/edit/${element.id}`}>
                            <button
                              // onClick={change}
                              className="text-gray-700 hover:text-green-600"
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => onDelete(element.id)}
                            className="text-gray-700 hover:text-red-600 ml-5"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        {currentData === 0 ? null : (
          <div className="flex items-center justify-center pt-6 gap-5">
            <Link className="mx-2 font-semibold text-gray-900">
              <button
                onClick={PrevPage}
                disabled={currentPage <= 1}
                className="flex items-center justify-center"
              >
                <span className="mr-1 mb-2 text-[18px]">&larr;</span>
                <span className="text-[15px]">Previous</span>
              </button>
            </Link>
            {Array.from({ length: totalPages }, (_, i) => (
              <button onClick={() => peginate(i + 1)}>
                <NavLink
                  className={`mx-1 flex justify-center items-center rounded-md border border-gray-400 px-3 py-2 text-gray-300 hover:scale-105 hover:bg-black hover:text-white`}
                  style={{
                    backgroundColor:
                      currentPage == i + 1 ? "black" : "transparent",
                    color: currentPage == i + 1 ? "white" : "inherit",
                  }}
                >
                  <span key={i}>{i + 1}</span>
                </NavLink>
              </button>
            ))}
            <Link className="mx-2 font-semibold text-gray-900">
              <button
                onClick={nextPage}
                disabled={currentPage >= totalPages}
                className="flex items-center justify-center"
              >
                <span className="text-[15px]">Next</span>
                <span className="ml-1 mb-2 text-[18px]">&rarr;</span>
              </button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
