import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";

function App() {
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const [inp, setInp] = useState("");
  const [state, setstate] = useState([]);
  const [edit, setedit] = useState({
    id: null,
    editing: false
  });

  const handlerSubmit = e => {
    e.preventDefault();
    var csrftoken = getCookie("csrftoken");
    var url = "http://127.0.0.1:8000/api/task-create";

    if (edit.editing === true) {
      var url = `http://127.0.0.1:8000/api/task-update/${edit.id}`;
      setedit({ editing: false, id: null });
    }

    var newitem = {
      id: null,
      title: inp,
      completed: false
    };
    setInp("");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(newitem)
    }).then(response => {
      name();
    });
  };

  const handlerEdit = e => {
    var editId = e.target.id;
    const editTitle = state.filter(item => item.id == editId)[0].title;
    setInp(editTitle);
    setedit({ editing: true, id: editId });
  };

  const handlerDelete = e => {
    var csrftoken = getCookie("csrftoken");
    var delId = e.target.id;
    fetch(`http://127.0.0.1:8000/api/task-delete/${delId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken
      }
    }).then(response => {
      name();
    });
  };

  function strikeUnstrike(item) {
    var csrftoken = getCookie("csrftoken");
    item.completed = !item.completed;
    fetch(`http://127.0.0.1:8000/api/task-update/${item.id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify({ title: item.title, completed: item.completed })
    }).then(response => {
      name();
    });
  }
  //  ................................... get data
  function name() {
    axios
      .get("http://127.0.0.1:8000/api/task-list/?format=json")
      .then(response => {
        setstate(response.data);
      })
      .catch(error => {
        console.log("Somthing Went Wrong !", error);
      });
  }

  useEffect(() => {
    name();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <div className="flex-wrapper">
              <div style={{ flex: 6 }}>
                <input
                  onChange={e => setInp(e.target.value)}
                  className="form-control"
                  type="text"
                  value={inp}
                  placeholder="Type here ..."
                />
              </div>
              <div style={{ flex: 1 }}>
                <input
                  onClick={handlerSubmit}
                  className="btn btn-warning ml-2"
                  id="submit"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
          <div id="list-wrapper">
            {state
              .slice(0)
              .reverse()
              .map((item, id) => {
                return (
                  <div
                    key={id}
                    className="task-wrapper py-2 pl-2 pr-0 flex-wrapper"
                  >
                    <div
                      onClick={() => strikeUnstrike(item)}
                      style={{ flex: 8 }}
                      id="titleDiv"
                    >
                      {item.completed === false ? (
                        <span>{item.title}</span>
                      ) : (
                        <strike>{item.title}</strike>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <button
                        id={item.id}
                        onClick={handlerEdit}
                        className="btn btn-outline-success btn-sm"
                      >
                        Edit
                      </button>
                    </div>
                    <div style={{ flex: 1 }}>
                      <button
                        id={item.id}
                        onClick={handlerDelete}
                        className="ml-1 btn btn-outline-danger btn-sm"
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
