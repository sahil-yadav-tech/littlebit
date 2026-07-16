import AddData from "@/components/AddData";
import { columns } from "@/components/Details/Colume"
import { DataTable } from "@/components/Details/DataTable"
import { Button } from "@/components/ui/button";

export default async function Page() {
  // Fetch data from backend
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    cache: "no-store"  // Don't cache, always fresh
  });
  
  const result = await response.json();
  console.log("API Response:s", result);
  console.log("Data Array:", result?.data);

  // Handle errors
  if (!result?.success) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <h1 className="text-2xl font-bold">Error Loading Datas </h1>
          <p>{result?.message || "Something went wrong"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 flex justify-center items-center min-h-screen">
      <div className="w-[80%] max-w-6xl">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Data Table</h1>
          <p className="text-gray-600">Total {result?.total || 0} records</p>
        </div>
      
      <AddData />
        <DataTable columns={columns} data={result?.data || []} />
      </div>
    </div>
  );
}