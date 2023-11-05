// export async function generateMetadata() {
//   const res = await fetch("https://cxfegguqmpvxlezjdrvw.supabase.co/rest/v1/pets");
//   const data = await res.json();
//   return {
//     title: data.name,
//     description: `race is ${data.race}`,
//   };
// }

export default async function animal() {
  const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4ZmVnZ3VxbXB2eGxlempkcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE0NDYsImV4cCI6MjAxMjQyNzQ0Nn0.4Biljryx2oExaShv5XooaKAxbdfL9BvZmgd7-1EWmD8";
  let headersList = {
    apikey: api,
    Accept: "application/json",
  };
  let response = await fetch(" https://cxfegguqmpvxlezjdrvw.supabase.co/rest/v1/pets?id=eq.7", {
    method: "GET",
    headers: headersList,
  });
  let data = await response.json();
  const { name, race, species, activityLevel } = data[0];
  console.log(data);
  return (
    <main className="m-10">
      <h1>{name}</h1>
      <p>{race}</p>
      <p>{species}</p>
      <p>{activityLevel}</p>
    </main>
  );
}
