export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🔧 JP Service</h1>
      <p>Backend API for service.jpecom.com</p>
      <ul>
        <li><a href="/api">/api</a> — Root endpoint</li>
        <li><a href="/api/health">/api/health</a> — Health check</li>
      </ul>
    </main>
  );
}
