export default function Navbar({ children }) {
  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      <nav className="navbar">
        <div>Logo</div>
        <div>Middle</div>
        <div>Right nav</div>
      </nav>
      {children}
    </div>
  );
}
{
  /* <div className="w-full"></div> */
}
