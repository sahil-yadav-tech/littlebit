export default async function Page() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      cache: "no-store",
    });

    console.log("Status:", response.status);

    const result = await response.json();

    return (
      <pre>{JSON.stringify(result, null, 2)}</pre>
    );
  } catch (err) {
    console.error("Fetch Error:", err);

    return (
      <div>
        <h1>Fetch Failed</h1>
        <p>{String(err)}</p>
      </div>
    );
  }
}