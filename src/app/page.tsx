import { AuthForm } from "../components/auth-form";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Reinart v3
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Secure authentication with Better Auth & Prisma
          </p>
        </div>
        
        <AuthForm />
      </main>
    </div>
  );
}
