

export default async function handler(req, res ) {
    
    
    
    const response= await fetch("https://gbaxrceynntdiffiuoum.supabase.co/rest/v1/contact_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey: process.env.SUPABASE-KEY,
      },
      body: JSON.stringify(seller),
    })
      .then((data) => data.json())
      .then((data) => (window.location.href = "/thankyou"));
  }