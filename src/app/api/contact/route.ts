import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const webhookURL = process.env.CONTACT_WEBHOOK_URL || '';
  if (!webhookURL) {
    return new Response('Error', { status: 500 });
  }

  const body = await request.json();
  console.log(body);
  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: body.name,
      content: `**${body.email}** \n${body.message}`
    })
  });

  if (response.ok) {
    return new Response('OK');
  }
  const restext = await response.json();
  if (restext.content[0].includes('fewer')) {
    return new Response('To long message', { status: 400 });
  }
  return new Response('Error', { status: 500 });
}