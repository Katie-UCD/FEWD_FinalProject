// src/pages/api/horoscope.js

export async function get({ request }) {
    const url = new URL(request.url);
    const sign = url.searchParams.get('sign') || 'virgo';  // Default to Virgo if no sign is provided
  
    try {
      // Make the request to the external horoscope API
      const response = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`);
      
      if (!response.ok) {
        return new Response("Failed to fetch horoscope data", { status: 500 });
      }
  
      // Parse the JSON data from the response
      const data = await response.json();
      
      // Return the data to the frontend
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      return new Response('Error fetching data', { status: 500 });
    }
  }
  