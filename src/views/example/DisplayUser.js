import React, { useEffect } from "react";

const DisplayUser = (props) => {
  const { stds } = props;
  const [isShow, setIsShow] = React.useState(true);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  console.log(">>> Render");

  useEffect(() => {
    if (stds.length == 0) {
      alert("Deleted all stds");
    }
    console.log(">>> Use useEffect");
  }, [stds]);
  // have many useEffect
  // if [] emply, useEffect = ComponentDidMount else = componentDidUpdate in Class Component

  return (
    <>
      <div>
        <button onClick={() => handleShow()}>
          {isShow === true ? "Hide" : "Show"}{" "}
        </button>
      </div>
      {isShow && (
        <>
          <div className="stdList">
            {stds.map((std) => {
              return (
                <div key={std.name}>
                  {std.name} - {std.age}
                  <button onClick={() => props.handleDelete(std.name)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default DisplayUser;
