const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

/** Full slideshow loop ≈ 30s (5 slides × 6s). */
export const SLIDE_MS = 6000

export const media = {
  campusDawn: asset('media/campus-dawn.jpg'),
  campusLife: asset('media/campus-life.jpg'),
  lab: asset('media/lab.jpg'),
  arts: asset('media/arts.jpg'),
  athletics: asset('media/athletics.jpg'),
  classroom: asset('media/classroom.jpg'),
  courtyard: asset('media/courtyard.jpg'),
  family: asset('media/family.jpg'),
  building: asset('media/building.jpg'),
}

export const slideMedia = [
  { id: 'campus-dawn', type: 'image' as const, src: media.campusDawn },
  {
    id: 'campus-life',
    type: 'video' as const,
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: media.campusLife,
  },
  { id: 'lab', type: 'image' as const, src: media.lab },
  { id: 'arts', type: 'image' as const, src: media.arts },
  { id: 'athletics', type: 'image' as const, src: media.athletics },
]
