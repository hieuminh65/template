// app/not-found.tsx
import React from "react";

const NotFound = () => {
  return (
    <section className="min-h-screen w-full py-20 bg-gray-100 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-purple-dark">Page Not Found</h2>
        <p className="mt-4 text-gray-800">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
