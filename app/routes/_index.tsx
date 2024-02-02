import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-black text-white flex align-middle items-center h-screen">
      <Button variant={"destructive"} onClick={() => alert("button clicked")}>Hello</Button>
    </div>
  );
}
