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
  
  const testimonials = [
    {
      id: 1,
      text: "La Dra. Paulina es INCREÍBLE. Tuve una urgencia dental el domingo mientras viajaba por Puebla. Ella respondió vía WhatsApp y programó una cita para el lunes. Tuve una solución perfecta y me sentí realmente afortunada y feliz de haberla conocido.",
      author: "María Rodríguez",
      initials: "MR",
      rating: 5
    },
    {
      id: 2,
      text: "Excelente atención y profesionalismo. Mi diseño de sonrisa quedó perfecto, superó todas mis expectativas. La doctora tiene un ojo increíble para los detalles estéticos.",
      author: "Carlos Mendoza",
      initials: "CM",
      rating: 5
    },
    {
      id: 3,
      text: "Después de años sin sonreír por vergüenza, finalmente encontré el lugar correcto. El tratamiento fue cómodo y los resultados hablan por sí solos. ¡100% recomendado!",
      author: "Ana Patricia Luna",
      initials: "AL",
      rating: 5
    },
    {
      id: 4,
      text: "La tecnología que utilizan es de primer nivel y el trato es muy humano. Me explicaron todo el proceso paso a paso. Mi experiencia fue excelente de principio a fin.",
      author: "Roberto Jiménez",
      initials: "RJ",
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
                className="h-12 w-auto"
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
                href="tel:+522227896543"
                className="hidden md:flex items-center gap-2 border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] px-4 py-2 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+52 222 789 6543</span>
              </a>

              {/* CTA Button */}
              <a 
                href="#citas"
                className="bg-[#0D9488] hover:bg-[#14B8A6] text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Agenda tu Cita
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="container mx-auto px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center min-h-[600px]">
          {/* Content Left */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-[#0D9488] leading-[0.95]">
                Transforma Tu Sonrisa
                <span className="block text-4xl lg:text-6xl text-gray-700">En Una Sola Cita</span>
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
                Llama Ahora: +52 222 789 6543
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
                <span className="text-lg font-semibold text-gray-700">4.9/5 • 150+ reseñas</span>
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
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full scale-110 opacity-30"></div>
              
              {/* Doctor Image */}
              <div className="relative z-10">
                <img
                  src="https://img.freepik.com/fotos-premium/mujer-dentista-sosteniendo-herramientas-aisladas-sobre-fondo-blanco-feliz-sonriente_1368-330456.jpg"
                  alt="Dra. Paulina Herrera Torres - Dentista especialista en estética dental"
                  className="w-full aspect-[4/5] object-cover object-center rounded-3xl shadow-xl"
                />
              </div>
              
              {/* Doctor Info Card - Below Image */}
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
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
      <section id="servicios" ref={servicesRef} className="bg-gradient-to-br from-[#ECFEFF] via-[#99F6E4] to-[#ECFEFF] py-20">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Limpieza Dental</h3>
              <p className="text-gray-600 text-center mb-6">
                Mantenimiento preventivo para una sonrisa saludable y brillante con tecnología ultrasónica moderna.
              </p>
              <button className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Ortodoncia</h3>
              <p className="text-gray-600 text-center mb-6">
                Alineación perfecta de tus dientes con brackets tradicionales o modernos sistemas invisibles.
              </p>
              <button className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Resinas Dentales</h3>
              <p className="text-gray-600 text-center mb-6">
                Restauraciones estéticas con materiales de última generación que imitan el color natural del diente.
              </p>
              <button className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Carillas Dentales</h3>
              <p className="text-gray-600 text-center mb-6">
                Láminas ultra delgadas de porcelana para corregir forma, color y tamaño de tus dientes.
              </p>
              <button className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Diseño de Sonrisa</h3>
              <p className="text-gray-600 text-center mb-6">
                Transformación completa de tu sonrisa con carillas, resinas y blanqueamiento personalizado.
              </p>
              <button className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#0D9488] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Blanqueamiento</h3>
              <p className="text-gray-600 text-center mb-6">
                Aclaramiento dental profesional para recuperar el blanco natural de tu sonrisa.
              </p>
              <button className="w-full border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                Más información
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/522227896543?text=Hola%2C%20me%20gustar%C3%ADa%20preguntar%20por%20m%C3%A1s%20servicios%20dentales"
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
      <section id="nosotros" className="py-20 bg-white">
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
                <button className="px-6 py-3 text-[#0D9488] border-b-2 border-[#0D9488] font-semibold">
                  Sobre la Dra. Paulina
                </button>
                <button className="px-6 py-3 text-gray-500 hover:text-[#0D9488] font-semibold">
                  Nuestro Equipo
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dra. Paulina Herrera Torres</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A lo largo de su carrera de 5 años, la Dra. Paulina continúa actualizando 
                    sus conocimientos en el campo dental participando activamente en conferencias 
                    y formaciones sobre todos los servicios que ofrece en Sonrisa de Oro.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Sus consultas se basan en conocimientos profundos en el área de estética dental, 
                    utilizando tecnología moderna para diagnósticos precisos. Su enfoque principal 
                    es brindar atención personalizada que responda a todas las necesidades del paciente, 
                    buscando siempre desarrollar nuevas técnicas y utilizar las tecnologías más recientes 
                    para ofrecer la mejor atención posible.
                  </p>
                </div>

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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#ECFEFF] px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  Conoce Más
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="bg-[#0D9488] hover:bg-[#14B8A6] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                  Agenda tu Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" ref={testimonialsRef} className="py-20 bg-gradient-to-br from-[#ECFEFF] via-[#99F6E4] to-[#ECFEFF]">
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
      <section id="promociones" className="py-20 bg-white">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Promociones Especiales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprovecha nuestras ofertas exclusivas y transforma tu sonrisa con los mejores precios.
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
                <div className="text-3xl font-bold text-[#0D9488] mb-2">$899</div>
                <div className="text-gray-500 line-through text-lg">$1,200</div>
                <div className="text-sm text-green-600 font-semibold">Ahorras $301</div>
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
                <div className="text-gray-500 line-through text-lg">$500</div>
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
                Primera Consulta GRATIS
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                Para pacientes nuevos: consulta completa, diagnóstico y plan de tratamiento sin costo.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#0D9488] mb-2">$0</div>
                <div className="text-gray-500 line-through text-lg">$300</div>
                <div className="text-sm text-green-600 font-semibold">100% GRATIS</div>
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

      {/* Appointment Section */}
      <section id="citas" className="py-20 bg-white">
        <div className="container mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0D9488] mb-4">
              Agenda tu Cita
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reserva tu consulta de manera rápida y sencilla. Te confirmaremos tu cita por WhatsApp.
            </p>
          </div>

          {/* Appointment Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Appointment Form Left */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
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
                  <p className="text-[#0D9488] font-medium">¿Cuándo te gustaría venir?</p>
                </div>
              </div>

              {/* Appointment Form */}
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+52 222 123 4567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu.email@ejemplo.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Servicio Deseado
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors text-gray-600">
                    <option value="">Selecciona un servicio</option>
                    <option value="limpieza">Limpieza Dental</option>
                    <option value="ortodoncia">Ortodoncia</option>
                    <option value="resinas">Resinas Dentales</option>
                    <option value="carillas">Carillas Dentales</option>
                    <option value="diseno">Diseño de Sonrisa</option>
                    <option value="blanqueamiento">Blanqueamiento</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha Preferida
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora Preferida
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors text-gray-600">
                      <option value="">Selecciona horario</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Comentarios Adicionales
                  </label>
                  <textarea
                    rows={3}
                    placeholder="¿Alguna solicitud especial o síntoma que debamos conocer?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors resize-none placeholder:text-gray-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D9488] hover:bg-[#14B8A6] text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Confirmar Cita
                </button>
              </form>
            </div>

            {/* Information Right */}
            <div className="space-y-8">
              {/* Schedule Info */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#0D9488]" />
                  Horarios de Atención
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Lunes - Viernes</span>
                    <span className="text-[#0D9488] font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Sábados</span>
                    <span className="text-[#0D9488] font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Domingos</span>
                    <span className="text-gray-400 font-semibold">Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Services Duration */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-[#0D9488]" />
                  Duración de Servicios
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Consulta / Limpieza</span>
                    <span className="text-[#0D9488] font-semibold">45-60 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Diseño de Sonrisa</span>
                    <span className="text-[#0D9488] font-semibold">90 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Blanqueamiento</span>
                    <span className="text-[#0D9488] font-semibold">60 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Carillas / Resinas</span>
                    <span className="text-[#0D9488] font-semibold">90-120 min</span>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#0D9488]" />
                  Políticas de Citas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2"></div>
                    <p className="text-gray-600">Confirmación inmediata por WhatsApp</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2"></div>
                    <p className="text-gray-600">Reagendaciones con 24 horas de anticipación</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0D9488] rounded-full mt-2"></div>
                    <p className="text-gray-600"><strong>Primera consulta GRATIS</strong> para nuevos pacientes</p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">¿Tienes dudas?</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Contáctanos por WhatsApp para resolver cualquier pregunta sobre tu cita.
                  </p>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors">
                    Preguntar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-[#ECFEFF] via-[#99F6E4] to-[#ECFEFF]">
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
                  <p className="text-[#0D9488] font-medium">¿Cómo puedo ayudarte?</p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
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
                    placeholder="+52 222 123 4567"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe tu consulta o el servicio que te interesa..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-colors resize-none placeholder:text-gray-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D9488] hover:bg-[#14B8A6] text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar Mensaje
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
                      <p className="text-gray-600">+52 222 789 6543</p>
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
                className="h-16 w-auto"
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
              <a href="#citas" className="hover:text-[#0D9488] transition-colors font-medium">
                Agenda tu Cita
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
                href="tel:+522227896543" 
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
              <span>Dra. Paulina Herrera Torres - Cédula Profesional: 12345678</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Colonia El Mirador, Puebla</span>
              <span>•</span>
              <span>+52 222 789 6543</span>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">Featured by Novalabss</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
