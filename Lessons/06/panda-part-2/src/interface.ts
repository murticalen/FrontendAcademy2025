export interface Country {
  name?: string
  slug?: string
  alpha2?: string
  alpha3?: string
}

export interface Player {
  id: number
  name: string
  slug: string
  shortName?: string
  position?: string
  firstName?: string
  lastName?: string
  country?: Country
  jerseyNumber?: string
}
