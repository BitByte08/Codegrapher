

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-surface pl-40 pr-40 h-20 shadow-md sticky left-0 right-0 top-0">
      <div>header</div>
      <div className="flex items-center justify-between gap-4">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Header;