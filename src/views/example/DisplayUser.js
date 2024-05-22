import React from "react";

const DisplayUser = (props) => {
  const { stds } = props;
  const [isShow, setIsShow] = React.useState(true);

  const handleShow = () => {
    setIsShow(!isShow);
  };
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
