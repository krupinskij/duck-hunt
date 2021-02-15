export function getIdFromEvent(event: Event): number {
  const eventTarget = event.target as any;

  if(eventTarget.classList.contains('duck')) {
    return eventTarget.id;
  }
}