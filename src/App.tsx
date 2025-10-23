import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="w-full max-w-4xl mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
        <p className="text-lg text-gray-600">
          A simple and clean layout to get you started.
        </p>
      </header>

      {/* Email Signup Section */}
      <section className="w-full max-w-md mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Join our mailing list to receive the latest news and updates.
        </p>
        <form
          action="https://getform.io/f/bqoelqyb"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-auto text-center text-gray-500 text-sm">
        <p>© 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
