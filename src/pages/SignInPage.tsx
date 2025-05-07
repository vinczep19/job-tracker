import { NavLink } from 'react-router'

function SignInPage() {
  return (
    <div className="bg-neutral-600 h-screen w-screen flex justify-center items-center">
      <form
        className="h-90 w-100 bg-neutral-200 rounded-xl flex flex-col"
        onSubmit={() => console.log('form submitted')}
      >
        <h2 className="text-3xl font-semibold relative top-3 left-3 mb-10">
          Sign In
        </h2>
        <div className="flex flex-col gap-2 items-center mb-2">
          <label>Username</label>
          <input
            type="text"
            className="w-[95%] px-3 py-1 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your username..."
          />
        </div>
        <div className="flex flex-col gap-2 items-center mb-2">
          <label>Password</label>
          <input
            type="text"
            className="w-[95%] px-3 py-1 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your password..."
          />
        </div>
        <div className="mt-5 flex justify-center items-center gap-3">
          <NavLink
            to="/dashboard"
            type="submit"
            className="bg-blue-500 text-white rounded w-auto p-1 text-center text-xl"
          >
            Log In
          </NavLink>
          <button className="bg-neutral-700 text-white w-auto p-1 rounded text-center text-xl">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignInPage
