export default async function handler(req, res) {
  //res.status(200).json({name:req.body})
  const response = await fetch(
    "https://gbaxrceynntdiffiuoum.supabase.co/rest/v1/Contact-Form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_KEY,
        Prefer: "return=representation",
      },
      body: JSON.stringify(req.body),
    }
  ).then((res) => res.json());
  console.log({ response });

  return res.status(200).json({ response });
}