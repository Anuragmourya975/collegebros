import React from "react";

function Cards() {
  return (
    <div>
      <a
        class="block overflow-hidden border-2 border-gray-100 rounded-lg shadow-sm"
        href=""
      >
        <img
          class="object-cover w-full h-56"
          src="https://www.hyperui.dev/photos/team-1.jpeg"
          alt=""
        />

        <div class="p-6">
          <h5 class="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>

          <p class="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-between">
            <div class="inline-block p-2 mt-4 font-medium text-blue-600 border-2 border-blue-500 ">
              Download
              <span aria-hidden="true">&rarr;</span>
            </div>
            <div class="inline-block p-2 mt-4 font-medium text-blue-600 border-2 border-blue-500 ">
              View
              <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards;
