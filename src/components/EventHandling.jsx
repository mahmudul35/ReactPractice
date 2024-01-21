import React from "react";
function doSomething() {
  console.log("Hello!");
}
const EventHandling = () => {
  return (
    <div>
      <button onClick={doSomething}>Click Me!</button>
      <p
        onClick={() => {
          console.log("HaHaHa");
        }}
      >
        This is the demo of event handling
      </p>
    </div>
  );
};

export default EventHandling;
