import React from "react";

function Card({ user }) {
  return (
    <>
      <div className="bg-white max-w-2xs rounded-lg overflow-hidden h-fit flex flex-col gap-4">
        <div className="px-6 pt-5 w-full    flex items-center flex-col">
          <div className="flex justify-between w-full">
            {user.available && (
              <span
                className={"bg-green-500 rounded-xl text-sm px-2.5 text-white"}
              >
                available
              </span>
            )}

            <p className="text-gray-700 font-medium ml-auto">
              ${user.price}/hr
            </p>
          </div>
          <div
            id="image-container"
            className="max-w-44 rounded-full overflow-hidden"
          >
            <img src={user.image} alt={`Profile photo of ${user.name}`} />
          </div>

          <div className=" flex flex-col items-center gap-2">
            <p className="font-semibold text-gray-950 text-xl">{user.name}</p>
            <p className="text-xs text-gray-600">{user.role}</p>
            <p className="text-xs text-blue-600">{user.company} </p>

            <div className="flex gap-1.5 flex-wrap justify-center">
              {user.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="border border-gray-500 px-2 py-1 text-xs rounded-full text-gray-800 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className=" text-xs text-gray-700 text-center mt-3">
              {user.about}
            </p>
          </div>
        </div>
        <button className=" p-5 w-full text-gray-800 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer border-t border-gray-400 ">
          View Profile
        </button>
      </div>
    </>
  );
}

export default Card;
