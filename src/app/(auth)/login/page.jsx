import Link from "next/link";

const page = () => {
  return (
    <form className="w-full">
      <h2 className="text-4xl text-center font-bold mb-12">Login</h2>
      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="someone@example.com"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm"
        />
      </div>
      <div className="grid grid-cols-2 space-x-2 text-nowrap">
        <button
          type="submit"
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Login
        </button>
        <Link
          href="/register"
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 text-center"
        >
          Not a Member? Register
        </Link>
      </div>
    </form>
  );
};
export default page;
