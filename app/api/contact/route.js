import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, company } = await req.json();
    if (company) return Response.json({ ok: true }); // honeypot
    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email) || message.length > 5000)
      return Response.json({ error: "Please fill in every field with a valid email." }, { status: 400 });
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS)
      return Response.json({ error: "Email is not configured yet. Please email me directly." }, { status: 500 });
    const port = Number(SMTP_PORT || 465);
    const transport = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transport.sendMail({
      from: `"Portfolio contact form" <${SMTP_USER}>`, to: CONTACT_TO || SMTP_USER, replyTo: email,
      subject: `New portfolio message from ${name}`, text: `From: ${name} <${email}>\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send your message. Please email me directly." }, { status: 500 });
  }
}
