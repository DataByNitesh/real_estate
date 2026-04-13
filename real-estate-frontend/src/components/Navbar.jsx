const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow bg-white">
      <h1 className="text-xl font-bold">RealEstate</h1>
      <a
        href="/admin"
        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
      >
        Admin
      </a>
    </div>
  );
};

export default Navbar;
