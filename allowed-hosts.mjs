/**
 * Hosts permitidos para Vite (dev + preview).
 * Rechaza peticiones cuyo Host no esté en la lista (mitiga DNS rebinding).
 * Nunca uses `true` en vite.server.allowedHosts: permitiría cualquier host.
 *
 * Opcional: ALLOWED_HOSTS en el entorno, separado por comas.
 * Un prefijo `.` permite ese dominio y todos sus subdominios (p. ej. `.devidev.es`).
 * Ejemplo: ALLOWED_HOSTS=.devidev.es,links.devidev.work
 */
function parseAllowedHosts() {
	const raw = process.env.ALLOWED_HOSTS;
	if (raw && String(raw).trim()) {
		return String(raw)
			.split(',')
			.map((h) => h.trim())
			.filter(Boolean);
	}
	return ['.devidev.es'];
}

export const allowedHosts = parseAllowedHosts();
