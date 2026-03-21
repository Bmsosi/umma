import umma1 from '../../umma1.png'
import umma2 from '../../umma2.png'
import umma3 from '../../umma3.png'
import umma4 from '../../umma4.png'
import umma5 from '../../umma5.png'
import umma6 from '../../umma6.png'
import umma7 from '../../umma7.png'
import umma8 from '../../umma8.png'

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'activities', label: 'Activities' },
  { id: 'fundraising', label: 'Fundraising' },
  { id: 'contact', label: 'Contact' },
  { id: 'donate', label: 'Donate', isButton: true },
]

export const aboutSections = [
  {
    title: 'Who We Are',
    text: 'Umma is a caring community built around service, faith, and belonging. We bring people together, support families through important moments in life, and create spaces where every person can feel seen, welcomed, and valued.',
  },
  {
    title: 'Our Vision',
    text: 'Our vision is to strengthen community ties by offering meaningful programs, Islamic education, youth engagement, and practical support. We want Umma to be a place where compassion becomes action and where people help each other grow.',
  },
  {
    title: 'Umma Support',
    text: 'Supporting Umma means helping sustain gatherings, educational programs, community care, and future projects. Community members can support by volunteering, donating, sponsoring activities, and sharing our mission with others.',
  },
]

export const services = [
  'Celebration of Life',
  'Ramadan',
  'Quran and Islam Education',
  'Youth Gathering',
  'Funerals',
  'Masjid',
]

export const activities = [
  {
    title: 'Community Welcome Gathering',
    description: 'Families and neighbours came together to build connection and celebrate the strength of the community.',
    image: umma1,
  },
  {
    title: 'Youth Reflection Session',
    description: 'A focused gathering for young people with discussion, support, and shared learning.',
    image: umma2,
  },
  {
    title: 'Ramadan Community Meal',
    description: 'An evening of prayer, food, and togetherness during the blessed month.',
    image: umma3,
  },
  {
    title: 'Learning and Recitation Circle',
    description: 'Community members joined for Quran recitation and Islamic reminders.',
    image: umma4,
  },
  {
    title: 'Volunteer Support Day',
    description: 'Members worked side by side to support community needs and strengthen service efforts.',
    image: umma5,
  },
  {
    title: 'Family Activity Day',
    description: 'A joyful event with family-friendly activities designed to bring generations together.',
    image: umma6,
  },
  {
    title: 'Community Outreach Event',
    description: 'An event centered on care, visibility, and extending support to more people.',
    image: umma7,
  },
  {
    title: 'Masjid Program Highlight',
    description: 'A moment from a gathering that reflects prayer, learning, and a shared sense of purpose.',
    image: umma8,
  },
]

export const fundraisingProjects = [
  {
    title: 'Masjid Improvement Project',
    text: 'We are raising support to improve prayer spaces, accessibility, and essential facilities for the community.',
  },
  {
    title: 'Education Program Fund',
    text: 'This fundraiser helps sustain Quran classes, Islamic studies, youth learning resources, and community teachers.',
  },
  {
    title: 'Community Care Support',
    text: 'Funds go toward helping families in need, funeral support, celebration-of-life gatherings, and emergency assistance.',
  },
]

export const supportOptions = [
  'Monthly donations to sustain community services',
  'One-time contributions for urgent and seasonal projects',
  'Business or family sponsorship for programs and gatherings',
  'Volunteer support for events, logistics, and outreach',
]

export const donationOptions = [
  {
    title: 'Current Project',
    text: 'Direct your donation to the project that is currently most urgent for Umma and the wider community.',
    code: 'current-project',
    transferNote: 'Donation for Current Project',
  },
  {
    title: 'Education Program Fund',
    text: 'Support Quran learning, Islamic education, youth development, and teaching resources.',
    code: 'education-program-fund',
    transferNote: 'Donation for Education Program Fund',
  },
  {
    title: 'Community Care Support',
    text: 'Help families through hardship, funeral support, emergency needs, and practical community care.',
    code: 'community-care-support',
    transferNote: 'Donation for Community Care Support',
  },
  {
    title: 'Monthly Umma Support Donations',
    text: 'Provide reliable monthly support that helps Umma plan and sustain ongoing services all year.',
    code: 'monthly-umma-support',
    transferNote: 'Monthly Umma Support Donation',
  },
]
