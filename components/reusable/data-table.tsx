export default function DataTable({ data }: { data: string[][] }) {
  const headers = data[0];
  const rows = data.slice(1);
  return (
    <table className="w-full text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
        <tr>
          {headers.map((key, i) => (
            <th key={i} scope="col" className="p-4 text-left font-semibold">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={index}
            className={`transition-all ${
              index % 2 === 0
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50 dark:bg-gray-800"
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            {row.map((key, i) => (
              <td
                key={i}
                className="p-4 border-b border-gray-200 dark:border-gray-700"
              >
                {key}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
