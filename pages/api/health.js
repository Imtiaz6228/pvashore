// Health check endpoint for monitoring application status
export default function handler(req, res) {
  const { method } = req;

  if (method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic health check response
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.version,
    environment: process.env.NODE_ENV || 'development',
    platform: process.platform
  };

  // Add more detailed checks if needed
  try {
    // Database connection check (if applicable)
    // const dbStatus = await checkDatabaseConnection();

    // External service checks (if applicable)
    // const externalServices = await checkExternalServices();

    res.status(200).json({
      ...healthData,
      // db: dbStatus,
      // services: externalServices
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
