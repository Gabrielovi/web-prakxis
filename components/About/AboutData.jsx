import Image1 from '@/public/images/388.png'; // Usamos estos de marcador por ahora
import Image2 from '@/public/images/388.png';

export const aboutData = {
    business: {
        subtitle: "Sobre Nosotros",
        // El componente pide un objeto con 'first' y 'last'
        title: {
            first: "Ciencia y",
            last: "Narrativa en Acción"
        },
        description: "En Prakxis, creemos que el conocimiento científico merece ser contado con la misma pasión con la que se descubre. Somos un equipo especializado en transformar conceptos complejos en experiencias visuales y narrativas que conectan con las personas.",
        // Al importar las imágenes arriba, Next.js ya no pedirá el 'width' manualmente
        image1: {
            logo: Image1, 
            alt: "Prakxis Ciencia"
        },
        image2: {
            logo: Image2,
            alt: "Prakxis Narrativa"
        },
        // El objeto 'button' con su 'link' es obligatorio
        button: {
            text: "Saber más",
            link: "#"
        },
        features: [
            {
                icon: "bi bi-check-circle",
                text: "Divulgación científica con rigor y creatividad."
            },
            {
                icon: "bi bi-check-circle",
                text: "Producción audiovisual de alta calidad."
            },
            {
                icon: "bi bi-check-circle",
                text: "Estrategias de comunicación para impacto social."
            }
        ],
    },
    // Rellenamos el resto para que no den error si cambias de página
    corporate: { title: { first: "", last: "" }, image1: { logo: Image1 }, image2: { logo: Image2 }, button: { text: "", link: "" }, features: [] },
    creativeAgency: { title: { first: "", last: "" }, image1: { logo: Image1 }, image2: { logo: Image2 }, button: { text: "", link: "" }, features: [] },
    marketing: { title: { first: "", last: "" }, image1: { logo: Image1 }, image2: { logo: Image2 }, button: { text: "", link: "" }, features: [] },
    interior: { title: { first: "", last: "" }, image1: { logo: Image1 }, image2: { logo: Image2 }, button: { text: "", link: "" }, features: [] },
};