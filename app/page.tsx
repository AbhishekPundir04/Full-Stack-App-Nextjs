import Link from "next/link";

export default function HomePage() {
  const isUserLoggedIn = false;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-gray-100 p-6">
      <nav className="w-full flex justify-between items-center p-4  fixed top-0 bg-white shadow-md">
        <h1 className="text-xl font-bold flex items-center">
          <span className="text-brandOrange">Promptopia</span>
        </h1>
        {!isUserLoggedIn ? (
          <Link href="/" className="bg-black text-white px-4 py-2 rounded-lg">
            Sign in
          </Link>
        ) : (
          <></>
        )}

        {isUserLoggedIn ? (
          <Link
            href="/create-post"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Create Post
          </Link>
        ) : (
          <></>
        )}
      </nav>
      <div className="text-center mt-24">
        <h2 className="text-4xl font-bold">
          Discover & Share <br />
          <span className="text-brandOrange">AI-Powered Prompts</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Promptopia is an open-source AI prompting tool for the modern world to
          discover, create, and share creative prompts.
        </p>
        <input
          type="text"
          placeholder="Search for a tag or a username"
          className="mt-6 p-3 w-full max-w-lg border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-brandOrange"
        />
      </div>
    </div>
  );
}
