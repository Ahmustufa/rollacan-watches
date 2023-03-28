import React from "react";

function Products() {
  return (
    <div className="bg-brown p-4">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Our Latest Collection
      </h1>
      <div className="flex justify-center gap-x-60">
        <div>
          <img src={require("./images/watch3.png")} width={200} />
          <div className="py-2">
            <p className="text-white text-center text-xl text-bolder">
              ROLLACAN 1.0
            </p>
            <p className="text-white text-center text-lg">Price: $300</p>
          </div>
        </div>
        <div>
          <img src={require("./images/watch4.png")} width={200} />
          <div className="py-2">
            <p className="text-white text-center text-xl text-bolder">
              ROLLACAN 2.0
            </p>
            <p className="text-white text-center text-lg">Price: $300</p>
          </div>
        </div>
        <div>
          <img src={require("./images/watch5.png")} width={200} />
          <div className="py-2">
            <p className="text-white text-center text-xl text-bolder">
              ROLLACAN 3.0
            </p>
            <p className="text-white text-center text-lg">Price: $300</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
