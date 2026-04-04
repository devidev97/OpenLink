/**
 * Hosts permitidos para Vite (dev + preview).
 * Opcional: define ALLOWED_HOSTS en el entorno, separado por comas.
 * Ejemplo: ALLOWED_HOSTS=links.devidev.work,dfds.devidev.app
 */
function parseAllowedHosts() {
	const raw = process.env.ALLOWED_HOSTS;
	if (raw && String(raw).trim()) {
		return String(raw)
			.split(',')
			.map((h) => h.trim())
			.filter(Boolean);
	}
	return ['links.devidev.work', 'dfds.devidev.app'];
}

export const allowedHosts = parseAllowedHosts();
