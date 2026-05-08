import { SignIn } from "@clerk/nextjs";

export default function AdminSignInPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <SignIn
        routing="path"
        path="/admin/sign-in"
        forceRedirectUrl="/admin"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-[#111] border border-[#222]",
          },
        }}
      />
    </main>
  );
}
