import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  let [state , setState] = useState([]) 
    
  async function componentDidMount()  {
    // let url = 'http://localhost:3000/User'
    let data = await fetch('http://localhost:3000/User')
    let Data = await data.json()
    setState(Data);
  }

  componentDidMount()
 
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = 'add'; 
      navigate(path);
    }
    const change = () =>{ 
      let path = 'edit'; 
      navigate(path);
    }

  return (
      <section className="mx-auto w-full max-w-7xl  px-4 py-4 ">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex w-full max-md:block  justify-between items-center">
            <h2 className="text-lg font-semibold">Employees Details</h2>
            <input type="search" placeholder="search" className=" max-lg:mt-2 border-[1px] border-gray-300 rounded-md px-5 py-2 outline-none" /><br className="lg:hidden"/>
            <button
              type="button"
              onClick={routeChange}
              className="rounded-md bg-black max-md:mt-2 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
          <div>
          </div>
        </div>
        <div className="mt-6 flex flex-col ml-14">
          <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className=" table-fixed divide-y divide-gray-200">
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
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                        &nbsp;
                      </th>
                    </tr>
                  </thead>
                  {state.map((element) => {
                    return(

                  <tbody className="divide-y divide-gray-200 bg-white" key={element.id}>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                              alt=""
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
                        <span className="text-sm">

                        {element.phone}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                       <span className="text-sm">{element.address.city}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                      <span className="text-sm">{element.profession}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right text-[16px] font-medium">
                        <button onClick={change} className="text-gray-700 hover:text-green-600">
                          Edit
                        </button>
                        <a href="#" className="text-gray-700 hover:text-red-600 ml-5">
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;
