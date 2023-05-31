const LoginForm = ({formname}) => {
  return (
    <div className="p-3 space-y-5">
      <h1 className="font-semibold text-xl">{formname}</h1>
      <div className="flex flex-col gap-2">
        <input
          placeholder="Enter username"
          className="border-2 w-full p-2 rounded-md"
        />
        <input
          placeholder="Enter password"
          className="border-2 w-full p-2 rounded-md"
        />
        <button className="bg-blue-700 text-white py-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  )
}
export default LoginForm