import type { ActionFunctionArgs, MetaFunction } from "@vercel/remix";
import { json } from "@remix-run/react";
import About from "~/components/about";
import Features from "~/components/features";
import Hero from "~/components/hero";
import NavigationBar from "~/components/navbar";
import Pricing from "~/components/pricing";
import { createSupabaseServerClient } from "~/lib/supabase/supabase.server";
import Footer from "~/components/footer";
import Contact from "~/components/contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Minister Kenya" },
    { name: "description", content: "Your Digital Lamp On The Hill" },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {

  const formData = await request.formData();
  const email = formData.get("email") as string;

  const response = new Response();

  const client = createSupabaseServerClient({ request, response });

  const res = await client.from("invites").upsert({ email });
  // console.log({ res });

  return json({ res })
};

export default function Index() {
  // const data = useActionData<typeof action>()
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
