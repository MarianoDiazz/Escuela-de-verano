// src/data/coloniaData.js
import {
    Droplets, Trophy, Palette, Music, Users, Camera, Clock, TreePine, Tent, Sun, Moon
} from 'lucide-react';

export const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=600&fit=crop', alt: 'Juegos deportivos al aire libre' },
    { url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop', alt: 'Natación en la pileta' },
    { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop', alt: 'Actividades artísticas' },
    { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', alt: 'Juegos en grupo' },
    { url: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=600&fit=crop', alt: 'Actividades deportivas' },
    { url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop', alt: 'Diversión en la naturaleza' }
];

export const heroSlides = [
    { url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1920&h=1080&fit=crop', title: '¡Diversión y Aprendizaje!', subtitle: 'Desconectamos de las pantallas, conectamos con la naturaleza' },
    { url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&h=1080&fit=crop', title: 'Aprendé a Nadar', subtitle: 'Perdé el miedo al agua con profesionales' },
    { url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1920&h=1080&fit=crop', title: 'Conectá con la Naturaleza', subtitle: 'Actividades campamentiles y al aire libre' }
];

export const activities = [
    { icon: Droplets, name: 'Natación', description: 'Aclimatización al medio acuático y técnicas de nado', color: '#0dcaf0' },
    { icon: Trophy, name: 'Juegos Deportivos', description: 'Fútbol, voley, atletismo y más', color: '#ffc107' },
    { icon: Users, name: 'Juegos Tradicionales', description: 'Rayuela, soga, elástico, gallito ciego', color: '#198754' },
    { icon: TreePine, name: 'Naturaleza y Cuidado', description: 'Huertas, plantado de árboles, caminatas', color: '#28a745' },
    { icon: Tent, name: 'Actividades Campamentiles', description: 'Fogones, armado de carpas, juegos nocturnos', color: '#6f42c1' },
    { icon: Sun, name: 'Juegos de Recreación', description: 'Trepar, saltar, equilibrio, fuerza', color: '#fd7e14' }
];

export const testimonials = [
    { name: 'María González', text: 'Mi hijo dejó la tablet y ahora no para de hablar de las actividades. Aprendió a nadar y volvió más seguro de sí mismo.', rating: 5 },
    { name: 'Carlos Rodríguez', text: 'Excelente trabajo de los profesores. Las actividades campamentiles fueron lo más esperado por mi hija.', rating: 5 },
    { name: 'Laura Fernández', text: 'Increíble cómo combaten el sedentarismo. Mis hijos llegan cansados pero felices y con muchas historias para contar.', rating: 5 }
];

export const schedule = [
    { time: '9:30 - 10:00', activity: 'Llegada y Calentamiento', icon: Users, color: '#0d6efd' },
    { time: '10:00 - 10:45', activity: 'Primera Actividad (Juegos/Deportes)', icon: Trophy, color: '#198754' },
    { time: '10:45 - 11:00', activity: 'Hidratación y Descanso', icon: Clock, color: '#ffc107' },
    { time: '11:00 - 11:30', activity: 'Natación o Actividad Acuática', icon: Droplets, color: '#0dcaf0' }
];

export const scheduleAfternoon = [
    { time: '17:00 - 17:30', activity: 'Llegada y Activación', icon: Users, color: '#0d6efd' },
    { time: '17:30 - 18:15', activity: 'Actividades al Aire Libre', icon: TreePine, color: '#28a745' },
    { time: '18:15 - 18:30', activity: 'Descanso', icon: Clock, color: '#ffc107' },
    { time: '18:30 - 19:00', activity: 'Natación o Juegos', icon: Droplets, color: '#0dcaf0' }
];

export const nightActivity = {
    time: '20:00 - 22:00',
    day: 'Un día a la semana (a definir)',
    activities: ['Fogones', 'Juegos nocturnos', 'Observación de estrellas', 'Cancionero']
};

export const pricingPlans = [
    {
        name: 'Turno Mañana',
        price: '$25.000',
        period: 'por mes',
        features: ['Martes y Jueves', '9:30 a 11:30 hs', 'Todas las actividades', 'Natación incluida', 'Seguro de accidentes'],
        popular: false,
        variant: 'primary'
    },
    {
        name: 'Turno Tarde',
        price: '$25.000',
        period: 'por mes',
        features: ['Martes y Jueves', '17:00 a 19:00 hs', 'Todas las actividades', 'Natación incluida', 'Seguro de accidentes'],
        popular: false,
        variant: 'success'
    },
    {
        name: 'Completo + Nocturna',
        price: '$45.000',
        period: 'por mes',
        features: ['Martes y Jueves', 'Ambos turnos', 'Actividad nocturna', 'Campamento incluido', 'Todas las actividades', 'Material deportivo', 'Remera de la escuela'],
        popular: true,
        variant: 'danger'
    },
    {
        name: 'Bebés (2-4 años)',
        price: '$20.000',
        period: 'por mes',
        features: ['Martes y Jueves', '1 hora por día', 'Actividades adaptadas', 'Acompañamiento especial', 'Natación con padres'],
        popular: false,
        variant: 'info'
    }
];

export const teamMembers = [
    {
        name: 'Marcos Lemoine',
        role: 'Profesor Principal - Educación Física',
        initials: 'ML',
        image: 'https://avatars.githubusercontent.com/u/71349010?v=4',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        name: 'Próximamente',
        role: 'Profesor/a',
        initials: '?',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
        name: 'Próximamente',
        role: 'Profesor/a',
        initials: '?',
        gradient: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)'
    }
];

export const faqs = [
    {
        question: '¿Qué edades pueden participar?',
        answer: 'La escuela está abierta para niños desde 2 años hasta 14 años. Los bebés de 2 a 4 años tienen un turno especial de 1 hora con actividades adaptadas.'
    },
    {
        question: '¿Qué días y horarios funcionan?',
        answer: 'Martes y Jueves en dos turnos: Mañana de 9:30 a 11:30 hs y Tarde de 17:00 a 19:00 hs. Además hay una actividad nocturna opcional (campamento) de 20:00 a 22:00 hs un día a la semana.'
    },
    {
        question: '¿Qué deben traer los niños?',
        answer: 'Malla de baño, toalla, protector solar, gorra, ropa cómoda, calzado deportivo y botella de agua. Para natación de bebés, se solicita flotadores individuales para brazos.'
    },
    {
        question: '¿Los niños deben saber nadar?',
        answer: 'No es necesario. Trabajamos la aclimatización al medio acuático desde cero, ayudando a perder el miedo al agua y enseñando técnicas de nado progresivamente.'
    },
    {
        question: '¿Hay descuentos?',
        answer: 'Sí! 15% de descuento por hermanos y 10% por pago adelantado del mes completo.'
    },
    {
        question: '¿Qué medidas de seguridad tienen?',
        answer: 'Personal capacitado en primeros auxilios, seguro de accidentes, supervisión permanente en pileta y todas las actividades. El predio tiene césped en toda su extensión para mayor seguridad.'
    },
    {
        question: '¿Dónde está ubicada la escuela?',
        answer: 'En Aguilares, Tucumán - Barrio Los Callejones, camino al puente colgante. El predio tiene 108 metros de largo x 60 de ancho con césped natural y está a 700 metros del río.'
    }
];

export const importancePoints = [
    { title: 'Desarrolla Habilidades', description: 'Motricidad, coordinación y destrezas físicas' },
    { title: 'Trabajo en Equipo', description: 'Colaboración y compañerismo' },
    { title: 'Conexión con la Naturaleza', description: 'Respeto y cuidado del medio ambiente' },
    { title: 'Resiliencia', description: 'Superación de desafíos y fortaleza emocional' },
    { title: 'Independencia y Autoestima', description: 'Confianza en sí mismos' },
    { title: 'Combate el Sedentarismo', description: 'Aleja a los niños de las pantallas' },
    { title: 'Continúa Educando', description: 'Aprendizaje práctico durante el verano' },
    { title: 'Aumenta la Autoestima', description: 'Logros personales y reconocimiento' }
];

export const traditionalGames = [
    'Rayuela', 'La soga', 'El elástico', 'La etiqueta', 'El tarro',
    'El gallito ciego', 'El embolsado', 'Piyada', 'El indio va',
    'Búsqueda del tesoro', 'Juego de la fuerza'
];

export const campingActivities = [
    'Fogones', 'Juegos nocturnos', 'Armado de carpas',
    'Equipos de trabajo', 'Caminata al río (700m)', 'Cancionero'
];

export const contactInfo = {
    phone: '3865689114',
    whatsappNumber: '5493865689114',
    location: 'Aguilares, Tucumán',
    fullAddress: 'Barrio Los Callejones, camino al puente colgante',
    schedule: {
        days: 'Martes y Jueves',
        morning: '9:30 a 11:30 hs',
        afternoon: '17:00 a 19:00 hs',
        night: '20:00 a 22:00 hs (actividad nocturna opcional)',
        babies: '1 hora (turno a coordinar)'
    },
    facilityInfo: {
        size: '108m x 60m',
        surface: 'Césped natural',
        nearRiver: '700 metros del río'
    }
};