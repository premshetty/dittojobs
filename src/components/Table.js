import React, { useState } from "react";
import data from "../data/employee";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
function Table() {
  const [archive, setarchive] = useState(true);
  const [archiveMAil, setarchiveMail] = useState(true);
  const [search, setSearch] = useState("");
  const [sortData, setsortData] = useState(data);
  const toggleArchive = () => {
    setarchive(!archive);
  };
  const searchText = (value) => {
    setSearch(value);
  };

  const sortDecending = (a, b) => {
    let c = new Date(a.last_comms.date_time);
    let d = new Date(b.last_comms.date_time);
    return c > d ? 1 : -1;
  };

  const sortAscending = (a, b) => {
    let c = new Date(a.last_comms.date_time);
    let d = new Date(b.last_comms.date_time);
    return c < d ? 1 : -1;
  };
  const sort = (sormethod) => {
    let newdata = [...data];
    newdata.sort(sormethod);
    setsortData(newdata);
  };
  const tabledata = sortData.map((item) => {
    const changeArchive = () => {
      setarchiveMail(!archiveMAil);
      item.archived = !item.archived;
    };
    const searchTextToLower = search.toLowerCase();
    const candidateToLower = item.candidate.toLowerCase();
    const searchCondition = candidateToLower.indexOf(searchTextToLower) >= 0;
    if (searchCondition) {
      if (archive) {
        return item.archived === false ? (
          <TableData
            image={item.image}
            archived={item.archived}
            candidate={item.candidate}
            last_comms={item.last_comms}
            role={item.role}
            salary={item.salary}
            sent_by={item.sent_by}
            key={item.candidate}
            changeArchive={changeArchive}
          />
        ) : null;
      } else {
        return (
          <TableData
            image={item.image}
            archived={item.archived}
            candidate={item.candidate}
            last_comms={item.last_comms}
            role={item.role}
            salary={item.salary}
            sent_by={item.sent_by}
            key={item.candidate}
            changeArchive={changeArchive}
          />
        );
      }
    } else {
      return null;
    }
  });
  return (
    <div>
      <div className="px-5 mb-3 md:px-0 gap-4 md:p-5 flex justify-between h-[67px] py-[10px] bg-white max-w-7xl m-auto">
        <div className=" flex h-[47px] w-[222px] items-center  border-[1px] border-[#CECFD1] ">
          <input
            type="text"
            className="ml-2 w-full   p-[10px]  bg-transparent placeholder-[#C5C0C0] outline-none"
            placeholder="Search "
            onChange={(e) => {
              searchText(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2  "
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(180, 179, 176)"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <label className="text-[16px]"> Show Archived</label>
          <input
            type="checkbox"
            onClick={toggleArchive}
            className="md:ml-2 h-5 w-5"
          />
        </div>
      </div>
      <div className="h-[100vh] w-full bg-[#e4ebef] overflow-x-auto ">
        <div className="max-w-7xl m-auto ">
          <h1 className="text-end text-[#7c7c80]  py-3">6interview request</h1>
          <table className="min-w-full bg-white  leading-normal shadow-lg h-full">
            <TableHeader
              sortAscending={sortAscending}
              sortDecending={sortDecending}
              sort={sort}
            />
            <tbody className="">{tabledata}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
