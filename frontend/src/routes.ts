import { EntityId } from "./types/utils";

export const AppRoutes = {
  HOME: '/',
  BOAT: { url: '/boats/:id', getRoute: (id: EntityId) => `/boats/${id}` },
  EDIT_BOAT: { url: '/boats/:id/edit', getRoute: (id: EntityId) => `/boats/${id}/edit` },
  CREATE_BOAT: '/boats/create',
  CREATE_CREW_MEMBER: { url: '/boats/:boatId/crew/create', getRoute: (boatId: EntityId) => `/boats/${boatId}/crew/create` },
  UPDATE_CREW_MEMBER: { url: '/boats/:boatId/crew/:id/update', getRoute: (boatId: EntityId, id: EntityId) => `/boats/${boatId}/crew/${id}/update` },
}