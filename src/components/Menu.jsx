import Link from "next/link";

export default async function Menu() {
  const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4ZmVnZ3VxbXB2eGxlempkcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE0NDYsImV4cCI6MjAxMjQyNzQ0Nn0.4Biljryx2oExaShv5XooaKAxbdfL9BvZmgd7-1EWmD8";
  let headersList = {
    apikey: api,
    Accept: "application/json",
  };
  let response = await fetch(`https://cxfegguqmpvxlezjdrvw.supabase.co/rest/v1/pets`, {
    method: "GET",
    headers: headersList,
  });
  const pages = await response.json();

  return (
    <nav className="m-10">
      <Link className="pr-4 underline hover:underline hover:text-blue-400" href="/" prefetch={false}>
        Forside
      </Link>
      {pages.map((page) => {
        return (
          <Link className="pr-4 underline hover:underline hover:text-blue-400" key={page.id} href={`/animals/${page.id}`}>
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
}
