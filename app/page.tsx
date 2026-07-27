import Image from "next/image";

  export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-blue-700">
        Welcome to AdmitStrong
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Hello World ! Personalized, AI-powered guidance to help students build stronger college journeys with clarity and confidence.
      </p>
    </main>
  );
}