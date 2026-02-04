import Card from "./components/Card";
// import { useState, useEffect } from "react";
import { USERS as users } from "./data/users";

function App() {
  // Fetch user data using API with robust error handling and cleanup==========================================================
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //  useEffect(() => {
  //     const controller = new AbortController();

  //     async function fetchData() {
  //   setLoading(true);

  //   try {
  //     const response = await fetch("https://api.jsonbin.io/v3/qs/69837b9343b1c97be9655903");

  //     if (!response.ok) {
  //       throw new Error("Data not found");
  //     }

  //     const data = await response.json();
  //     setUsers(data.record.users);

  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  //     fetchData();

  //   }, []);

  //   if (loading) return <h1>Loading...</h1>;
  //==========================================================================================================================

  return (
    <>
      <main className="min-h-screen bg-slate-900 grid gap-4 p-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </main>
    </>
  );
}

export default App;
