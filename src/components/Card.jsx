import React from "react";

function Card() {
  return (
    <div>
      <div
        className="card mt-3"
        style={{ width: "18rem", maxHeight: "22.5rem" }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1728911694979-a38f9d4237bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">this is some imp text</p>
          <div className="container w-100">
            <select className="m-1 h-100  bg-success rounded" name="" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-1 h-100  bg-success rounded" name="" id="">
              <option value="half">Half</option>
              <option value="half">Full</option>
            </select>
            <div className="d-inline h-100 ">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
