"use client";

import { Phone, Calendar, Award, Users, Star, Sparkles, Shield, Smile, Stethoscope, Baby, AlertCircle, ChevronLeft, ChevronRight, Palette, Gem, Tag, Clock, MapPin, Mail, MessageCircle, Facebook, Instagram, Youtube, Navigation } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, threshold: 0.1 });
  
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.1 });
  
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: true, threshold: 0.1 });

  // Testimonials state and data
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Services popup state
  const [activeServicePopup, setActiveServicePopup] = useState(null);

  // Services data with professional copy
  const servicesData = {
    limpieza: {
      title: "Limpieza Dental Profesional",
      subtitle: "Prevención y salud bucal integral",
      description: "Nuestra limpieza dental profesional va más allá de una simple profilaxis. Utilizamos tecnología ultrasónica de última generación para remover placa bacteriana, sarro y manchas superficiales de manera completamente indolora.",
      benefits: [
        "Eliminación completa de placa bacteriana y sarro",
        "Prevención de enfermedades periodontales",
        "Detección temprana de caries y problemas bucales", 
        "Pulido y blanqueamiento natural de los dientes",
        "Aplicación de flúor para fortalecer el esmalte"
      ],
      duration: "45-60 minutos",
      frequency: "Cada 6 meses",
      price: "Desde $899"
    },
    ortodoncia: {
      title: "Ortodoncia Moderna",
      subtitle: "Alineación perfecta para tu sonrisa",
      description: "Corregimos la posición de tus dientes con los sistemas de ortodoncia más avanzados. Desde brackets tradicionales hasta alineadores invisibles, encontramos la mejor opción para tu estilo de vida.",
      benefits: [
        "Brackets metálicos y estéticos de alta calidad",
        "Sistemas de alineadores invisibles",
        "Corrección de mordida y alineación dental",
        "Mejora en la función masticatoria",
        "Resultados permanentes y naturales"
      ],
      duration: "12-24 meses",
      frequency: "Revisiones mensuales",
      price: "Plan desde $15,000"
    },
    resinas: {
      title: "Resinas Dentales Estéticas",
      subtitle: "Restauraciones que imitan la naturaleza",
      description: "Nuestras resinas dentales son restauraciones estéticas de composite que se mimetizan perfectamente con el color natural de tus dientes, proporcionando resultados invisibles y duraderos.",
      benefits: [
        "Material biocompatible de última generación",
        "Color exacto al tono natural de tus dientes",
        "Procedimiento en una sola sesión",
        "Conservación máxima del diente natural",
        "Resistencia y durabilidad comprobada"
      ],
      duration: "60-90 minutos",
      frequency: "Sesión única",
      price: "Desde $1,200 por pieza"
    },
    carillas: {
      title: "Carillas Dentales de Porcelana",
      subtitle: "Perfección estética instantánea",
      description: "Las carillas de porcelana son láminas ultra delgadas que se adhieren a la superficie frontal de los dientes, transformando completamente tu sonrisa con resultados de aspecto completamente natural.",
      benefits: [
        "Porcelana de alta resistencia y translucidez",
        "Corrección de forma, tamaño y color",
        "Resultados inmediatos y permanentes",
        "Resistencia a manchas y decoloración",
        "Diseño personalizado para cada paciente"
      ],
      duration: "2-3 sesiones",
      frequency: "Proceso completo",
      price: "Desde $8,000 por pieza"
    },
    diseno: {
      title: "Diseño de Sonrisa Integral",
      subtitle: "Transformación completa y personalizada",
      description: "Nuestro diseño de sonrisa es un tratamiento integral que combina múltiples técnicas estéticas para crear la sonrisa perfecta y armoniosa que siempre has deseado, respetando las proporciones naturales de tu rostro.",
      benefits: [
        "Análisis facial y dental computarizado",
        "Simulación digital previa al tratamiento",
        "Combinación de carillas, resinas y blanqueamiento",
        "Armonía perfecta con tus facciones",
        "Seguimiento post-tratamiento garantizado"
      ],
      duration: "4-6 sesiones",
      frequency: "Proceso completo",
      price: "Plan desde $45,000"
    },
    blanqueamiento: {
      title: "Blanqueamiento Dental Profesional",
      subtitle: "Recupera el blanco natural de tu sonrisa",
      description: "Nuestro sistema de blanqueamiento profesional utiliza geles de peróxido de concentración controlada y activación lumínica para aclarar tus dientes hasta 8 tonos de manera segura y efectiva.",
      benefits: [
        "Aclaramiento de 6-8 tonos en una sesión",
        "Fórmulas profesionales seguras y efectivas",
        "Protección completa de encías y tejidos",
        "Resultados inmediatos y duraderos",
        "Kit de mantenimiento domiciliario incluido"
      ],
      duration: "60-90 minutos",
      frequency: "Sesión única",
      price: "Desde $2,500"
    }
  };

  // Popup management functions
  const openServicePopup = (serviceId) => {
    setActiveServicePopup(serviceId);
    document.body.style.overflow = 'hidden';
  };

  const closeServicePopup = () => {
    setActiveServicePopup(null);
    document.body.style.overflow = 'unset';
  };

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeServicePopup) {
        closeServicePopup();
      }
    };
    
    if (activeServicePopup) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [activeServicePopup]);

  // About section tab state
  const [activeAboutTab, setActiveAboutTab] = useState('doctor');

  // Contact form state
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Handle contact form submission (fake)
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingForm(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmittingForm(false);
    setShowSuccessModal(true);
    document.body.style.overflow = 'hidden';
    
    // Reset form
    e.target.reset();
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    document.body.style.overflow = 'unset';
  };

  // Close success modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showSuccessModal) {
        closeSuccessModal();
      }
    };
    
    if (showSuccessModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showSuccessModal]);
  
  const testimonials = [
    {
      id: 1,
      text: "Vine por una limpieza sencilla y la doctora me explicó todo muy bien. El precio fue justo y no me presionaron para nada más. Mi familia ya tiene cita programada.",
      author: "María Elena Vázquez",
      initials: "MV",
      rating: 5
    },
    {
      id: 2,
      text: "Trabajo en oficina y necesitaba algo rápido. La cita fue puntual, terminaron en el tiempo que dijeron y el resultado se ve natural. Muy profesional todo.",
      author: "Carlos Hernández",
      initials: "CH",
      rating: 4
    },
    {
      id: 3,
      text: "Había ido a otros lugares antes y aquí sí me dieron la atención que esperaba. La doctora tiene buen ojo para los detalles y el consultorio está muy limpio.",
      author: "Ana Sofía Ruiz",
      initials: "AR",
      rating: 5
    },
    {
      id: 4,
      text: "Llevaba años posponiendo ir al dentista. La doctora fue muy paciente conmigo y no me hizo sentir mal por el estado de mis dientes. Buen trato.",
      author: "Roberto Morales",
      initials: "RM",
      rating: 4
    },
    {
      id: 5,
      text: "Soy estudiante y me preocupaba el costo, pero tienen opciones que se ajustan al presupuesto. La doctora es joven y entiende a los pacientes de mi edad.",
      author: "Jennifer Castillo",
      initials: "JC",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Sonrisa de Oro - Consultorio Dental" 
                className="h-12 w-auto rounded-[1rem]"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium">
                Servicios
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium">
                Nosotros
              </a>
              <a href="#promociones" className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium">
                Promociones
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-[#0D9488] transition-colors font-medium">
                Contacto
              </a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Phone Button */}
              <a 
                href="tel:+525518366890"
                className="hidden md:flex items-center gap-2 border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] px-4 py-2 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+52 551 836 6890</span>
              </a>

              {/* CTA Button */}
              <a 
                href="#contacto"
                className="bg-[#0D9488] hover:bg-[#14B8A6] text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="container mx-auto px-8 py-16 lg:py-24 min-h-[96vh] flex items-center">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center w-full">
          {/* Content Left */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-[#0D9488] leading-[0.95]">
                Transformamos Tu Sonrisa
                <span className="block text-[4.5xl] lg:text-6xl text-gray-700">Desde La Primera Cita</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-md leading-relaxed font-medium">
                Hacerte sonreír es lo que hacemos mejor.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 lg:space-y-3">
              <button className="bg-[#0D9488] hover:bg-[#14B8A6] text-white px-16 py-5 rounded-full text-xl font-semibold transition-colors w-full lg:w-auto shadow-lg hover:shadow-xl">
                Reserva tu Consulta GRATIS
              </button>
              
              <button className="border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] px-12 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-3 w-full lg:w-auto">
                <Phone className="w-5 h-5" />
                Llama Ahora: +52 551 836 6890
              </button>
            </div>

            {/* Trust Elements & Social Proof */}
            <div className="space-y-4">
              {/* Ratings */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">4.8/5</span>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 text-sm">
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1">
                  <Award className="w-4 h-4 text-[#0D9488]" />
                  <span className="font-medium text-gray-600">5+ Años Experiencia</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1">
                  <Users className="w-4 h-4 text-[#0D9488]" />
                  <span className="font-medium text-gray-600">500+ Sonrisas</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1">
                  <Award className="w-4 h-4 text-[#0D9488]" />
                  <span className="font-medium text-gray-600">Certificada SSA</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-base text-gray-600">
                <div className="w-2 h-2 bg-[#0D9488] rounded-full"></div>
                <span className="font-medium">Colonia El Mirador, Puebla</span>
              </div>
            </div>
          </motion.div>

          {/* Image Right - Doctor Photo */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative lg:justify-self-end order-first lg:order-last"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Doctor Image */}
              <div className="relative">
                <img
                  src="https://img.freepik.com/fotos-premium/mujer-dentista-sosteniendo-herramientas-aisladas-sobre-fondo-blanco-feliz-sonriente_1368-330456.jpg"
                  alt="Dra. Paulina Herrera Torres - Dentista especialista en estética dental"
                  className="w-full aspect-[4/5] object-cover object-center rounded-[2rem] shadow-xl"
                />
              </div>
              
              {/* Doctor Info Card - Below Image */}
              <div className="-mt-12 bg-white rounded-[2rem] pt-16 px-6 pb-6 shadow-lg border border-gray-100">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. Paulina Herrera Torres</h3>
                  <p className="text-[#0D9488] font-semibold">Especialista en Diseño de Sonrisa</p>
                  <p className="text-sm text-gray-500 mt-1">Atención personalizada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" ref={servicesRef} className="bg-gradient-to-br from-[#ECFEFF] via-[#99F6E4] to-[#ECFEFF] py-32">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Servicios de Alta Calidad Para Ti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En Sonrisa de Oro ofrecemos una gama completa de servicios dentales 
              con la más alta calidad y tecnología moderna.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 - Limpieza dental */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Limpieza Dental</h3>
              <p className="text-gray-600 text-center mb-6">
                Mantenimiento preventivo para una sonrisa saludable y brillante con tecnología ultrasónica moderna.
              </p>
              <button 
                onClick={() => openServicePopup('limpieza')}
                className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Service 2 - Ortodoncia */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Ortodoncia</h3>
              <p className="text-gray-600 text-center mb-6">
                Alineación perfecta de tus dientes con brackets tradicionales o modernos sistemas invisibles.
              </p>
              <button 
                onClick={() => openServicePopup('ortodoncia')}
                className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Service 3 - Resinas */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Resinas Dentales</h3>
              <p className="text-gray-600 text-center mb-6">
                Restauraciones estéticas con materiales de última generación que imitan el color natural del diente.
              </p>
              <button 
                onClick={() => openServicePopup('resinas')}
                className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Service 4 - Carillas */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Carillas Dentales</h3>
              <p className="text-gray-600 text-center mb-6">
                Láminas ultra delgadas de porcelana para corregir forma, color y tamaño de tus dientes.
              </p>
              <button 
                onClick={() => openServicePopup('carillas')}
                className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Service 5 - Diseño de sonrisa */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Diseño de Sonrisa</h3>
              <p className="text-gray-600 text-center mb-6">
                Transformación completa de tu sonrisa con carillas, resinas y blanqueamiento personalizado.
              </p>
              <button 
                onClick={() => openServicePopup('diseno')}
                className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Service 6 - Blanqueamiento */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Blanqueamiento</h3>
              <p className="text-gray-600 text-center mb-6">
                Aclaramiento dental profesional para recuperar el blanco natural de tu sonrisa.
              </p>
              <button 
                onClick={() => openServicePopup('blanqueamiento')}
                className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/525518366890?text=Hola%2C%20me%20gustar%C3%ADa%20preguntar%20por%20m%C3%A1s%20servicios%20dentales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0D9488] hover:bg-[#14B8A6] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Preguntar por Más Servicios
            </a>
            <p className="text-gray-600 mt-3 text-sm">
              Contáctanos por WhatsApp para conocer todos nuestros tratamientos especializados
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Acerca de Nuestro Consultorio Dental
            </h2>
          </div>

          {/* Content Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <div className="relative order-first lg:order-first">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#99F6E4] to-[#ECFEFF] rounded-full scale-110"></div>
                
                {/* Doctor Image */}
                <div className="relative z-10">
                  <img
                    src="https://img.freepik.com/fotos-premium/mujer-dentista-sosteniendo-herramientas-aisladas-sobre-fondo-blanco-feliz-sonriente_1368-330456.jpg"
                    alt="Dra. Paulina Herrera Torres - Especialista en diseño de sonrisa"
                    className="w-full aspect-square object-cover rounded-full shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="space-y-8">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button 
                  onClick={() => setActiveAboutTab('doctor')}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeAboutTab === 'doctor' 
                      ? 'text-[#0D9488] border-b-2 border-[#0D9488]' 
                      : 'text-gray-500 hover:text-[#0D9488]'
                  }`}
                >
                  Sobre la Dra. Paulina
                </button>
                <button 
                  onClick={() => setActiveAboutTab('team')}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeAboutTab === 'team' 
                      ? 'text-[#0D9488] border-b-2 border-[#0D9488]' 
                      : 'text-gray-500 hover:text-[#0D9488]'
                  }`}
                >
                  Nuestro Equipo
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {activeAboutTab === 'doctor' ? (
                  // Doctor Content
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Dra. Paulina Herrera Torres</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A lo largo de su carrera de 5 años, la Dra. Paulina continúa actualizando 
                      sus conocimientos en el campo dental participando activamente en conferencias 
                      y formaciones sobre todos los servicios que ofrece en Sonrisa de Oro.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Sus consultas se basan en conocimientos profundos en el área de estética dental, 
                      utilizando tecnología moderna para diagnósticos precisos. Su enfoque principal 
                      es brindar atención personalizada que responda a todas las necesidades del paciente, 
                      buscando siempre desarrollar nuevas técnicas y utilizar las tecnologías más recientes 
                      para ofrecer la mejor atención posible.
                    </p>

                    {/* Specializations */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#0D9488] rounded-full"></div>
                        <span className="text-gray-600">Diseño de Sonrisa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#0D9488] rounded-full"></div>
                        <span className="text-gray-600">Estética Dental</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#0D9488] rounded-full"></div>
                        <span className="text-gray-600">Atención Personalizada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#0D9488] rounded-full"></div>
                        <span className="text-gray-600">Tecnología Moderna</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Team Content
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestro Equipo Profesional</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      En Sonrisa de Oro contamos con un equipo altamente capacitado y comprometido 
                      con brindar la mejor atención dental. Cada miembro de nuestro equipo está 
                      especializado en diferentes áreas para garantizar un cuidado integral.
                    </p>

                    {/* Team Members */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">DPH</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">Dra. Paulina Herrera Torres</h4>
                            <p className="text-[#0D9488] font-medium">Directora y Especialista en Estética Dental</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Liderando el consultorio con 5+ años de experiencia en diseño de sonrisa y tratamientos estéticos avanzados.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">AE</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">Asistente Especializada</h4>
                            <p className="text-[#0D9488] font-medium">Apoyo en Procedimientos y Atención al Paciente</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Certificada en asistencia dental, garantiza que cada procedimiento se realice con la máxima precisión y cuidado.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">RC</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">Recepcionista y Coordinadora</h4>
                            <p className="text-[#0D9488] font-medium">Gestión de Citas y Atención Inicial</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Primera línea de atención, coordinando citas y asegurando una experiencia cómoda desde el primer contacto.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" ref={testimonialsRef} className="py-32 bg-gradient-to-br from-[#ECFEFF] via-[#99F6E4] to-[#ECFEFF]">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Testimonios de Nuestros Pacientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce las experiencias de quienes ya transformaron su sonrisa con nosotros.
            </p>
          </div>

          {/* Testimonials Content */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-center">
            {/* Main Testimonial Left */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={isTestimonialsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                {/* Quote Icon */}
                <div className="text-6xl text-[#0D9488] mb-6">"</div>
                
                {/* Testimonial Text */}
                <motion.blockquote 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8"
                >
                  {testimonials[currentTestimonial].text}
                </motion.blockquote>
                
                {/* Patient Info */}
                <motion.div 
                  key={`patient-${currentTestimonial}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{testimonials[currentTestimonial].initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].author}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Patient Avatars Right */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={isTestimonialsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Avatar 1 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <div className="w-20 h-20 bg-[#14B8A6] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JL</span>
                </div>
                <h5 className="font-semibold text-gray-800">Juan López</h5>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Avatar 2 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <div className="w-20 h-20 bg-[#0D9488] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <h5 className="font-semibold text-gray-800">Ana Castillo</h5>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Avatar 3 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <div className="w-20 h-20 bg-[#14B8A6] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RM</span>
                </div>
                <h5 className="font-semibold text-gray-800">Roberto Muñoz</h5>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Avatar 4 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <div className="w-20 h-20 bg-[#0D9488] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LS</span>
                </div>
                <h5 className="font-semibold text-gray-800">Laura Silva</h5>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#0D9488]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promociones" className="py-32 bg-white">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Promociones Especiales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofertas especiales para que cuides tu sonrisa sin comprometer tu presupuesto.
            </p>
          </div>

          {/* Promotions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Promotion 1 - Limpieza + Revisión */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              {/* Badge */}
              <div className="absolute -top-3 left-6">
                <div className="bg-[#0D9488] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  OFERTA ESPECIAL
                </div>
              </div>
              
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto mt-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Limpieza + Revisión Completa
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                Incluye limpieza profesional, revisión completa, rayos X y plan de tratamiento personalizado.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#0D9488] mb-2">$750</div>
                <div className="text-gray-500 line-through text-lg">$950</div>
                <div className="text-sm text-green-600 font-semibold">Ahorras $200</div>
              </div>
              
              <button className="w-full bg-[#0D9488] hover:bg-[#14B8A6] text-white py-3 px-6 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 mb-4">
                Aprovechar Oferta
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Válida hasta 31 de Agosto</span>
              </div>
            </div>

            {/* Promotion 2 - Diseño de Sonrisa */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              {/* Badge */}
              <div className="absolute -top-3 left-6">
                <div className="bg-[#0D9488] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  CONSULTA GRATIS
                </div>
              </div>
              
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto mt-4">
                <Smile className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Evaluación Diseño de Sonrisa
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                Consulta especializada GRATIS con análisis fotográfico 3D y propuesta personalizada.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#0D9488] mb-2">GRATIS</div>
                <div className="text-gray-500 line-through text-lg">$350</div>
                <div className="text-sm text-green-600 font-semibold">Consulta sin costo</div>
              </div>
              
              <button className="w-full bg-[#0D9488] hover:bg-[#14B8A6] text-white py-3 px-6 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 mb-4">
                Agendar Consulta
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Oferta por tiempo limitado</span>
              </div>
            </div>

            {/* Promotion 3 - Primera Cita */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 md:col-span-2 lg:col-span-1">
              {/* Badge */}
              <div className="absolute -top-3 left-6">
                <div className="bg-[#0D9488] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  PACIENTES NUEVOS
                </div>
              </div>
              
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto mt-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Primera Consulta 50% OFF
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                Para pacientes nuevos: consulta completa, diagnóstico y evaluación inicial con descuento especial.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#0D9488] mb-2">$150</div>
                <div className="text-gray-500 line-through text-lg">$300</div>
                <div className="text-sm text-green-600 font-semibold">50% de descuento</div>
              </div>
              
              <button className="w-full bg-[#0D9488] hover:bg-[#14B8A6] text-white py-3 px-6 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 mb-4">
                Reservar Cita
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Tag className="w-4 h-4" />
                <span>Solo para nuevos pacientes</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              ¿No encuentras lo que buscas? Contáctanos para ofertas personalizadas.
            </p>
            <button className="border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto">
              <Phone className="w-5 h-5" />
              Llamar para Más Ofertas
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 bg-gradient-to-br from-[#ECFEFF] via-[#99F6E4] to-[#ECFEFF]">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Contáctanos para Más Información
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para resolver todas tus dudas y agendar tu próxima cita.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form Left */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl sticky top-8">
              {/* Doctor Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DPH</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dra. Paulina Herrera</h3>
                  <p className="text-[#0D9488] font-medium">Agenda tu consulta</p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleContactFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu.email@ejemplo.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+52 551 836 6890"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Describe tu consulta o el servicio que te interesa..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors resize-none placeholder:text-gray-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingForm}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isSubmittingForm 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#0D9488] hover:bg-[#14B8A6] text-white'
                  }`}
                >
                  {isSubmittingForm ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Contact Info Right */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Ubicación</h3>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.234567891!2d-98.20623456789012!3d19.041234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6d4e8b5a1c7%3A0x9a8b7c6d5e4f3a2b!2sColonia%20El%20Mirador%2C%20Puebla%2C%20Pue.%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1693827456123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Consultorio Dental Sonrisa de Oro - Ubicación en Colonia El Mirador, Puebla"
                  ></iframe>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://www.google.com/maps/place/Colonia+El+Mirador,+Puebla,+Pue.,+México/@19.041234,-98.206234,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0D9488] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#14B8A6] transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Ver Ubicación
                  </a>
                  <a 
                    href="https://www.google.com/maps/dir//Colonia+El+Mirador,+Puebla,+Pue.,+México"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#0D9488] text-[#0D9488] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#ECFEFF] transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Cómo Llegar
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Teléfono</h4>
                      <p className="text-gray-600">+52 551 836 6890</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">paulina.herrera@sonrisadeoro.mx</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ubicación</h4>
                      <p className="text-gray-600">Colonia El Mirador, Puebla</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Horarios</h4>
                      <p className="text-gray-600">Lun-Vie: 9:00-18:00</p>
                      <p className="text-gray-600">Sáb: 9:00-14:00</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 p-4 bg-green-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    ¿Tienes una urgencia? Contáctanos por WhatsApp para atención inmediata.
                  </p>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors">
                    Chatear por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        ref={footerRef}
        initial={{ y: 50, opacity: 0 }}
        animate={isFooterInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-50 border-t border-gray-200 py-8"
      >
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo Left */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Sonrisa de Oro - Consultorio Dental" 
                className="h-16 w-auto rounded-[1rem]"
              />
            </div>

            {/* Navigation Center */}
            <nav className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
              <a href="#inicio" className="hover:text-[#0D9488] transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="hover:text-[#0D9488] transition-colors font-medium">
                Servicios
              </a>
              <a href="#nosotros" className="hover:text-[#0D9488] transition-colors font-medium">
                Nosotros
              </a>
              <a href="#promociones" className="hover:text-[#0D9488] transition-colors font-medium">
                Promociones
              </a>
              <a href="#contacto" className="hover:text-[#0D9488] transition-colors font-medium">
                Contacto
              </a>
            </nav>

            {/* Social Media Right */}
            <div className="flex items-center gap-4">
              {/* WhatsApp */}
              <a 
                href="#" 
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 bg-[#0D9488] hover:bg-[#14B8A6] rounded-full flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 bg-[#0D9488] hover:bg-[#14B8A6] rounded-full flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              
              {/* Phone */}
              <a 
                href="tel:+525518366890" 
                className="w-10 h-10 bg-[#0D9488] hover:bg-[#14B8A6] rounded-full flex items-center justify-center transition-colors"
                title="Llamar"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Bottom Credits */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>© 2025 Consultorio Dental Sonrisa de Oro.</span>
              <span>Dra. Paulina Herrera Torres</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Colonia El Mirador, Puebla</span>
              <span>•</span>
              <span>+52 551 836 6890</span>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <a 
              href="https://novalabss.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base text-gray-400 hover:text-[#0D9488] transition-colors"
            >
              Powered by Novalabss
            </a>
          </div>
        </div>
      </motion.footer>

      {/* Service Popup Modal */}
      {activeServicePopup && servicesData[activeServicePopup] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeServicePopup}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#134E4A] opacity-33" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-[2rem] p-8 lg:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeServicePopup}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0D9488] mb-3">
                  {servicesData[activeServicePopup].title}
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                  {servicesData[activeServicePopup].subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {servicesData[activeServicePopup].description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">¿Qué incluye este tratamiento?</h3>
                <div className="space-y-3">
                  {servicesData[activeServicePopup].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#ECFEFF] rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Duración</div>
                  <div className="font-semibold text-[#0D9488]">{servicesData[activeServicePopup].duration}</div>
                </div>
                <div className="bg-[#ECFEFF] rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Frecuencia</div>
                  <div className="font-semibold text-[#0D9488]">{servicesData[activeServicePopup].frequency}</div>
                </div>
                <div className="bg-[#ECFEFF] rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Precio</div>
                  <div className="font-semibold text-[#0D9488]">{servicesData[activeServicePopup].price}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/525518366890?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(servicesData[activeServicePopup].title)}%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#0D9488] hover:bg-[#14B8A6] text-white py-4 px-6 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Cita por WhatsApp
                </a>
                <button
                  onClick={closeServicePopup}
                  className="flex-1 border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-4 px-6 rounded-full font-semibold transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeSuccessModal}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#134E4A] opacity-33" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-[2rem] p-8 lg:p-12 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">¡Mensaje Enviado!</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gracias por contactarnos. Hemos recibido tu mensaje y la Dra. Paulina se pondrá en contacto contigo dentro de las próximas 24 horas.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/525518366890?text=Hola%2C%20acabo%20de%20enviar%20un%20mensaje%20desde%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
              <button
                onClick={closeSuccessModal}
                className="border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-semibold transition-colors"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
