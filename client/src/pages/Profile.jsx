import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover mx-auto mb-5 cursor-pointer"
          src={currentUser.photo}
          alt="Profile"
        />
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-egyptianblue text-white font-semibold uppercase rounded-lg p-3 cursor-pointer hover:opacity-95 disabled:opacity-80">
          Update
        </button>
        <button className="bg-neonorange text-white font-semibold uppercase rounded-lg p-3 cursor-pointer hover:opacity-95 disabled:opacity-80">
          Create Listing
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer ">Delete account</span>
        <span className="text-red-700 cursor-pointer ">Sign out</span>
      </div>
    </div>
  );
}
