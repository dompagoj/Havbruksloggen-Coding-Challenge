import { axios } from "./axios";
import { BoatDTO } from './types/http'
import { IBoat, ICrewMember } from "./types/data";
import { ICrewForm, IBoatForm } from "./types/forms";

export async function getBoats() {
  const { data } = await axios.get<BoatDTO[]>('boats')

  return data
}

export async function getBoat(key: string, id: number) {
  const { data } = await axios.get<IBoat>(`boats/${id}`)

  return data
}

export async function createBoat(form: IBoatForm) {
  const { data } = await axios.post<IBoat>(`boats`, form)

  return data
}

export async function updateBoat({ boatId, form }: { boatId: number, form: IBoatForm }) {
  const { data } = await axios.put<IBoat>(`boats/${boatId}`, form)

  return data
}

export async function deleteBoat(id: number) {
  return axios.delete(`boats/${id}`)
}

export async function getCrewMember(key: string, boatId: number, id: number) {
  const { data } = await axios.get<ICrewMember>(`boats/${boatId}/crew/${id}`)

  return data
}

export async function createCrewMember({ boatId, form }: { boatId: number, form: ICrewForm }) {
  const { data } = await axios.post<ICrewMember>(`boats/${boatId}/crew`, form)

  return data
}

export async function updateCrewMember({ boatId, id, form }: { boatId: number, id: number, form: ICrewForm }) {
  const { data } = await axios.put<ICrewMember>(`boats/${boatId}/crew/${id}`, form)

  return data
}

export async function deleteCrewMember({ boatId, id }: { boatId: number, id: number }) {
  return axios.delete(`boats/${boatId}/crew/${id}`)
}