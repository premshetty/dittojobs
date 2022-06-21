import React from "react";
import uparrow from "../data/up.svg";
import downarrow from "../data/down.svg";

function TableHeader({ sortAscending, sortDecending, sort }) {
  return (
    <thead>
      <tr className="">
        <th className="px-5 py-4   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Canditate
        </th>
        <th className="px-5 py-4   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          ROle
        </th>
        <th className="px-5 py-4  flex items-center gap-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Last Communication{" "}
          <div>
            <img
              className="h-3 w-3 opacity-60 m-0 p-0 cursor-pointer"
              src={uparrow}
              alt="sortAscending"
              onClick={() => sort(sortAscending)}
            />
            <img
              className="h-3 w-3 opacity-60 m-0 p-0 cursor-pointer"
              src={downarrow}
              alt="sortDecending"
              onClick={() => sort(sortDecending)}
            />
          </div>
        </th>
        <th className="px-5 py-4   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Salary{" "}
        </th>
        <th className="px-5 py-4   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Sent BY
        </th>
        <th className="px-5 py-4   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
      </tr>
    </thead>
  );
}

export default TableHeader;
