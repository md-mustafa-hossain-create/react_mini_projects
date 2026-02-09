import { useState } from "react";
import { NotebookPen, X } from "lucide-react";
function App() {
  const [heading, setHeading] = useState("");
  const [notesBody, setNotesBody] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Check if both heading and notesBody are empty
    if (heading.trim() || notesBody.trim()) {
      const saveTask = [...tasks];
      saveTask.push({ heading, notesBody });
      setTasks(saveTask);
      console.log(tasks);
    }
    setHeading("");
    setNotesBody("");
  }

  // function to handle heading input
  function handleHeading(e) {
    setHeading(e.target.value);
  }

  //function to handle notes body input
  function handleNotesBody(e) {
    setNotesBody(e.target.value);
  }

  // function to handle delete note
  function handleDelete(indexToDelete) {
    const updatedTask = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTask);
  }

  return (
    <div className="bg-black/90 min-h-screen md:flex text-white">
      <form
        onSubmit={handleSubmit}
        className=" flex items-start flex-col gap-4 p-10 md:w-1/2 "
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* input filed for heading */}
        <input
          className="border-2 border-white w-full px-5 py-2 rounded   outline-none font-medium"
          type="text"
          placeholder="Enter your heading...."
          value={heading}
          onChange={handleHeading}
        />

        {/* input field for notes body */}
        <textarea
          className="border-2 h-20 border-white w-full px-5  py-2 rounded  outline-none font-medium"
          type="text"
          placeholder="Enter your Notes...."
          value={notesBody}
          onChange={handleNotesBody}
        />
        <button className=" px-5 py-2 rounded bg-white w-full text-black cursor-pointer hover:bg-gray-300 transition-all duration-150 font-bold active:scale-95">
          Add Notes
        </button>
      </form>
      <div className="p-10 md:border-l-2 md:w-1/2 flex flex-col gap-6 overflow-hidden h-screen">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold ">Your Notes</h1>
          <NotebookPen />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] flex-1 justify-center md:justify-start gap-2 overflow-auto content-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tasks.map((task, index) => (
            <div
              key={index}
              className=" h-56 w-48 rounded-2xl text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover relative overflow-hidden"
            >
              {/* Delete button */}
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-5 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-all duration-150 active:scale-90 z-10"
                aria-label="Delete note"
              >
                <X size={16} />
              </button>

              <div className="w-full h-full pt-9 px-3 overflow-y-auto flex flex-col gap-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_90%,transparent_100%)]">
                <div className="font-semibold text-xl leading-tight break-all ">
                  {task.heading}
                </div>

                {task.heading ? <hr /> : ""}

                <div className="break-all text-gray-700 ">{task.notesBody}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
