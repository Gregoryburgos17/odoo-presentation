'use client';

import React, { useState } from 'react';
import { ChevronRight, Database, Users, BarChart, Settings, ShoppingCart, Package, Target, Building, Globe } from 'lucide-react';
import BubbleBackground from './BubbleBackground';
import OrganizationalStructure from './OrganizationalStructure';
import type { CompanyInfo, Service } from './types';

const OdooServicesFlow = () => {
  const [activeStep, setActiveStep] = useState(-3); // -3: inicio, -2: objetivos, -1: estructura, 0+: servicios
  const companyName = "TechSync Solutions";

  const companyInfo: CompanyInfo = {
    description: "TechSync Solutions es una empresa líder en implementación y desarrollo de soluciones Odoo, dedicada a transformar la gestión empresarial mediante tecnología de vanguardia.",
    mission: "Proporcionar soluciones tecnológicas innovadoras que impulsen la eficiencia y el crecimiento de nuestros clientes.",
    vision: "Ser referentes globales en la implementación de soluciones Odoo, reconocidos por nuestra excelencia e innovación.",
    objectives: [
      "Optimizar procesos empresariales mediante soluciones Odoo personalizadas",
      "Garantizar implementaciones exitosas con metodologías ágiles",
      "Proporcionar soporte continuo y capacitación integral",
      "Maximizar el ROI de nuestros clientes",
      "Mantener los más altos estándares de calidad y seguridad"
    ]
  };

  const services: Service[] = [
    {
      title: "Implementación Base",
      icon: Database,
      description: "Configuración inicial del sistema Odoo y migración de datos existentes",
      benefits: ["Base de datos optimizada", "Estructura personalizada", "Migración segura"]
    },
    {
      title: "Gestión de Usuarios",
      icon: Users,
      description: "Configuración de roles y permisos para su equipo",
      benefits: ["Control de acceso", "Roles personalizados", "Seguridad avanzada"]
    },
    {
      title: "Módulos Principales",
      icon: Package,
      description: "Implementación de módulos esenciales de Odoo",
      benefits: ["Ventas", "Inventario", "Contabilidad", "CRM"]
    },
    {
      title: "Integración E-commerce",
      icon: ShoppingCart,
      description: "Conexión con tu tienda online",
      benefits: ["Sincronización de inventario", "Gestión de pedidos", "Pagos en línea"]
    },
    {
      title: "Personalización",
      icon: Settings,
      description: "Desarrollo de funcionalidades específicas",
      benefits: ["Módulos a medida", "Reportes personalizados", "Flujos de trabajo únicos"]
    },
    {
      title: "Análisis y Reportes",
      icon: BarChart,
      description: "Implementación de herramientas de análisis",
      benefits: ["Dashboards en tiempo real", "KPIs personalizados", "Reportes automáticos"]
    }
  ];

  const handleNext = () => {
    setActiveStep(prev => {
      if (prev >= services.length - 1) return -3;
      return prev + 1;
    });
  };

  const handlePrevious = () => {
    setActiveStep(prev => {
      if (prev <= -3) return services.length - 1;
      return prev - 1;
    });
  };

  // Página de inicio
  if (activeStep === -3) {
    return (
      <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <BubbleBackground />
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-blue-600 mb-6 animate-fade-in">
            {companyName}
          </h1>
          <p className="text-2xl text-gray-600 mb-8 animate-fade-in-delay">
            Servicios Profesionales de Odoo
          </p>
          <button
            onClick={() => setActiveStep(-2)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition-colors animate-bounce"
          >
            Comenzar
          </button>
        </div>
      </div>
    );
  }

  // Página de objetivos y descripción
  if (activeStep === -2) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center p-4 relative">
        <BubbleBackground />
        <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-8 z-10">
          <h2 className="text-2xl text-center text-blue-600 font-bold mb-8">
            {companyName} - Nuestra Empresa
          </h2>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Building size={48} className="text-blue-600" />
              </div>
              <p className="text-lg text-gray-700">
                {companyInfo.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Globe className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold">Misión</h3>
                </div>
                <p className="text-gray-600">{companyInfo.mission}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold">Visión</h3>
                </div>
                <p className="text-gray-600">{companyInfo.vision}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">Objetivos Estratégicos</h3>
              <div className="grid gap-3">
                {companyInfo.objectives.map((objective, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                    <ChevronRight className="text-blue-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Anterior
              </button>
              <button
                onClick={() => setActiveStep(-1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Ver Estructura
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Página de estructura organizativa
  if (activeStep === -1) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center p-4 relative">
        <BubbleBackground />
        <div className="w-full max-w-6xl bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-8 z-10">
          <h2 className="text-2xl text-center text-blue-600 font-bold mb-8">
            {companyName} - Estructura Organizativa
          </h2>
          
          <OrganizationalStructure />

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Anterior
            </button>
            <button
              onClick={() => setActiveStep(0)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Páginas de servicios
  const currentService = services[activeStep];
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 relative">
      <BubbleBackground />
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-8 z-10">
        <h2 className="text-2xl text-center text-blue-600 font-bold mb-6">
          {companyName} - Servicios de Implementación Odoo
        </h2>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / services.length) * 100}%` }}
            />
          </div>

          <div className="w-full p-6 rounded-lg bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              {React.createElement(currentService.icon, {
                size: 48,
                className: "text-blue-600"
              })}
            </div>
            
            <h3 className="text-xl font-bold text-center mb-4">
              {currentService.title}
            </h3>
            
            <p className="text-gray-600 text-center mb-6">
              {currentService.description}
            </p>

            <div className="grid grid-cols-1 gap-3">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <ChevronRight className="text-blue-500" size={16} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Siguiente
            </button>
          </div>

          <div className="flex space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooServicesFlow;