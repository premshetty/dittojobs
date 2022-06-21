import React from "react";

function TableData({
  image,
  candidate,
  role,
  last_comms,
  salary,
  sent_by,
  archived,
  changeArchive,
}) {
  const messageRecived = new Date(last_comms.date_time).toLocaleDateString();
  let datetime;
  if (
    new Date(last_comms.date_time) ===
    new Date(new Date(last_comms.date_time).getTime() - 24 * 60 * 60 * 1000)
  ) {
    datetime = "Yesterday";
  }
  if (messageRecived === new Date().toLocaleDateString()) {
    datetime = new Date(last_comms.date_time).toLocaleTimeString();
  } else {
    datetime = new Date(last_comms.date_time)
      .toISOString()
      .substring(0, 10)
      .split("-")
      .reverse()
      .join("-");
  }

  return (
    <tr className="">
      <td className="flex pl-3 gap-2  items-center px-5 py-5  bg-white text-sm">
        <img
          className="h-[30px] w-[30px]  rounded-full "
          src={image}
          alt="candidate"
        />
        <p>{candidate} </p>
      </td>
      <td className="px-5 py-5  bg-white text-sm">{role}</td>
      <td className="flex pl-3 gap-2  items-center px-5 py-5  bg-white text-sm">
        {last_comms.unread ? (
          <div className="h-3 w-3 bg-green-600 rounded-full"></div>
        ) : null}

        <p> {last_comms.description} </p>
        <p className="text-[#00000079]">{datetime}</p>
      </td>
      <td className="px-5 py-5  bg-white text-sm">{salary}</td>
      <td className="px-5 py-5  bg-white text-sm">{sent_by}</td>
      {archived ? (
        <td onClick={changeArchive} className="text-blue-500 cursor-pointer">
          UnArchive
        </td>
      ) : (
        <td onClick={changeArchive} className="text-blue-500 cursor-pointer">
          Archive
        </td>
      )}
    </tr>
  );
}

export default TableData;
