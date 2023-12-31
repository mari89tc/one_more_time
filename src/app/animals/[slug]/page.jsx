// import { notFound } from "next/navigation";
// export default async function Person ({params}) {
// const {slug} = params;
// const res = await fetch(`https://swapi.dev/api/people/1`);
// if (res.status !=200) return notFound();
// const data= await res.json();
// const {name, gender, skin_color, } = data;
//     return (

// )

// }

export default async function animal({ params }) {
  const { slug } = params;
  const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4ZmVnZ3VxbXB2eGxlempkcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE0NDYsImV4cCI6MjAxMjQyNzQ0Nn0.4Biljryx2oExaShv5XooaKAxbdfL9BvZmgd7-1EWmD8";
  let headersList = {
    apikey: api,
    Accept: "application/json",
  };
  let response = await fetch(`https://cxfegguqmpvxlezjdrvw.supabase.co/rest/v1/pets?id=eq.${slug}`, {
    method: "GET",
    headers: headersList,
  });
  const data = await response.json();
  const { name, race, species, activityLevel } = data[0];
  return (
    <main className="m-10 bg-gray-100 p-6 w-60">
      <div className="m-2">
        <h2 className="text-indigo-700">Name: </h2>
        <p>{name}</p>
      </div>
      <div className="m-2">
        <h2 className="text-indigo-700">Race: </h2>
        <p>{race}</p>
      </div>
      <div className="m-2">
        <h2 className="text-indigo-700">Species: </h2>
        <p>{species}</p>
      </div>
      <div className="m-2">
        <h2 className="text-indigo-700">Activity Level: </h2>
        <p>{activityLevel}</p>
      </div>
    </main>
  );
}
