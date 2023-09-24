import React from "react";

const { useState, Fragment } = React;

const Toggle = (props) => {
  const [shownComments, setShownComments] = useState({});

  const toggleComment = (id) => {
    setShownComments((prevShownComments) => ({
      ...prevShownComments,
      [id]: !prevShownComments[id],
    }));
  };

  return (
    <Fragment>
      {props.search_results.map((obj) => (
        <div key={obj.id}>
          {obj.comment ? (
            <button onClick={() => toggleComment(obj.id)}>{props.text}</button>
          ) : null}
          <div>{obj.text}</div>
          {shownComments[obj.id] ? <p>{obj.comment}</p> : null}
        </div>
      ))}
    </Fragment>
  );
};

export default Toggle;
