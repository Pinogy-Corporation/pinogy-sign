/**
 * Health check for load balancers and Kubernetes liveness/readiness probes.
 * Returns 200 so the pod is not restarted when probes hit this path.
 */
export function GET() {
  return new Response(JSON.stringify({ status: 'ok' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
