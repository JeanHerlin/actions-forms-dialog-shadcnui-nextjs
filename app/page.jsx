import ActionsContainer from "@/components/actions-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* The actions components are the components that you can call in every component that need it */}
      <ActionsContainer/>
    </main>
  );
}
