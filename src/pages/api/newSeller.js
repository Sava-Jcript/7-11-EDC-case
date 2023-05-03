export default async function handler(req, res) {
  //res.status(200).json({name:req.body})
  const response = await fetch(
    "https://gbaxrceynntdiffiuoum.supabase.co/rest/v1/contact_form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiYXhyY2V5bm50ZGlmZml1b3VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5NzExNjYsImV4cCI6MTk5ODU0NzE2Nn0.QU4H0KkyFDOEcSWu5fHD8pvXYR56rl-kIT1TpE112o8",


        Prefer: "return=representation",
      },
      body: JSON.stringify(req.body),
    }
  ).then((res) => res.json());
  console.log({ response });

  return res.status(200).json({response});
}




