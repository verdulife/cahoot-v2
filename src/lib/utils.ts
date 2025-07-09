export function formatTime(timeout: number) {
  return new Intl.DurationFormat("es-ES", { minutes: "narrow", seconds: "narrow" }).format({ minutes: timeout / 60 });
}