export type StarStudent = {
  id: string
  nameAr: string
  nameEn: string
  fieldAr: string
  fieldEn: string
  noteAr: string
  noteEn: string
  year: string
}

/** Distinguished students showcase — edit this list to update نجوم التميز. */
export const starStudents: StarStudent[] = [
  {
    id: 'star-01',
    nameAr: 'نجم التميز',
    nameEn: 'Star of Excellence',
    fieldAr: 'التفوّق العلمي',
    fieldEn: 'Academic excellence',
    noteAr: 'يُضاف اسم الطالب المتفوق وتفاصيل إنجازه بعد اعتمادها من إدارة المدرسة.',
    noteEn: 'The distinguished student’s name and achievement will be added once confirmed by the school.',
    year: '2025–2026',
  },
  {
    id: 'star-02',
    nameAr: 'نجم الإبداع',
    nameEn: 'Star of Creativity',
    fieldAr: 'الإبداع والابتكار',
    fieldEn: 'Creativity & innovation',
    noteAr: 'مساحة مخصّصة لتكريم الموهبة والإبداع الطلابي في مسيرة التميّز.',
    noteEn: 'A dedicated space to honour student talent and creativity on the path of excellence.',
    year: '2025–2026',
  },
  {
    id: 'star-03',
    nameAr: 'نجم القيادة',
    nameEn: 'Star of Leadership',
    fieldAr: 'القيادة والمشاركة',
    fieldEn: 'Leadership & service',
    noteAr: 'نحتفي بالطلبة الذين يقودون بروح المسؤولية ويصنعون أثراً في مجتمع المدرسة.',
    noteEn: 'We celebrate students who lead with responsibility and leave a mark on the school community.',
    year: '2025–2026',
  },
]
