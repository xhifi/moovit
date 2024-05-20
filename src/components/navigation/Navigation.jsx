import Link from "next/link";
import NavigationLink from "./NavigationLink";

const NavigationList = ({ data }) => {
  return (
    <ul className="md:flex md:items-center space-x-1">
      {data.map((item, index) => {
        return (
          <li key={index} className="">
            <NavigationLink
              href={item.path}
              className="px-2.5 py-1.5 hover:bg-slate-200 transition-colors rounded-md border-b-2 border-transparent hover:border-slate-400 selection:bg-slate-200 select-none cursor-pointer"
            >
              {item.content}
            </NavigationLink>
          </li>
        );
      })}
    </ul>
  );
};

const navigationListData = [
  { path: "/", content: "Home" },
  { path: "/about", content: "About Us" },
  { path: "/services", content: "Services" },
  { path: "/contact", content: "Contact Us" },
];

const Navigation = () => {
  return (
    <div className="container bg-slate-50 py-2">
      <div className="md:flex md:items-center">
        <Link href="/" className="text-2xl font-bold select-none">
          Freight <span className="text-cyan-600 font-extrabold">Ninjas</span>
        </Link>
        <div className="ms-auto md:flex md:flex-row md:items-center space-x-4">
          <NavigationList data={navigationListData} />
          <ul className="flex items-center space-x-2">
            <Link
              href="/login"
              className="px-3 py-1 border-2 border-cyan-600 rounded-md hover:bg-cyan-600 hover:text-white transition-colors"
            >
              Login / Register
            </Link>
            <Link
              href="/"
              className="px-3 py-1 bg-cyan-600 border-2 border-transparent rounded-md text-white hover:bg-cyan-600 transition-colors"
            >
              Get Quotation
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
