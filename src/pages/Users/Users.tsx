import { useFetchUsers } from "@apis/queries/login.query";
import Skeleton from "@components/Skeleton";

const Users = () => {
  const { data, isLoading, error } = useFetchUsers();

  if (isLoading)
    return (
      <div className="flex flex-col items-center content-center justify-center overflow-x-auto text-tBase">
        <h1 className="mb-2 text-4xl font-semibold text-primary">
          Loading users...
        </h1>
        <div className="flex justify-center text-tBase">
          <div className="overflow-x-auto text-tBase">
            <table className="min-w-[1000px] border border-gray-300 rounded-xl shadow-sm table-auto">
              <thead className="bg-primary text-tBase">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Website</th>
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">City</th>
                </tr>
              </thead>
              <tbody className="bg-bgPrimary text-primary animate-pulse">
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    {Array(6)
                      .fill(0)
                      .map((_, j) => (
                        <td key={j} className="px-4 py-2">
                          <Skeleton className="w-3/4 h-4 bg-gray-300 rounded " />
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col items-center justify-center overflow-x-auto text-tBase">
        <h1 className="mb-2 text-4xl font-semibold text-primary">
          Error fetching users.
        </h1>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center overflow-x-auto text-tBase">
      <h1 className="mb-2 text-4xl font-semibold text-primary">Users Page</h1>

      <div className="max-w-[1000px] w-full rounded-lg shadow border border-gray-100 overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-primary text-tBase">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Website</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">City</th>
            </tr>
          </thead>
          <tbody className="bg-bgPrimary text-primary">
            {data?.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.website}</td>
                <td className="px-4 py-2">{user.company.name}</td>
                <td className="px-4 py-2">{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
