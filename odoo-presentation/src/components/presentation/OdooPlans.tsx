'use client';

import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { ChevronRight, Clock, CreditCard, Shield, Zap, Package, Book, Headphones, Settings } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  recommended?: boolean;
};

type ServicePlansProps = {
  companyName: string;
  onPrevious: () => void;
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
};

const ServicePlans = ({ companyName, onPrevious, onNext, currentStep, totalSteps }: ServicePlansProps) => {
  const [activeTab, setActiveTab] = useState('subscription');

  const subscriptionPlans: Plan[] = [
    {
      name: "Plan Básico",
      price: "$499/mes",
      icon: Shield,
      features: [
        "Hasta 5 usuarios",
        "Módulos básicos",
        "Soporte 8x5",
        "Actualizaciones mensuales",
        "1 hora de consultoría mensual",
        "Backups diarios"
      ]
    },
    {
      name: "Plan Profesional",
      price: "$999/mes",
      icon: Zap,
      features: [
        "Hasta 20 usuarios",
        "Módulos avanzados",
        "Soporte 12x6",
        "Actualizaciones semanales",
        "4 horas de consultoría mensual",
        "Backups diarios",
        "Personalización básica",
        "API access"
      ],
      recommended: true
    },
    {
      name: "Plan Enterprise",
      price: "$1999/mes",
      icon: Package,
      features: [
        "Usuarios ilimitados",
        "Todos los módulos",
        "Soporte 24/7",
        "Actualizaciones prioritarias",
        "10 horas de consultoría mensual",
        "Backups continuos",
        "Personalización avanzada",
        "API access premium",
        "Ambiente de pruebas"
      ]
    }
  ];

  const hourlyPlans: Plan[] = [
    {
      name: "Desarrollo",
      price: "$75/hora",
      icon: Settings,
      features: [
        "Desarrollo de módulos personalizados",
        "Integraciones con sistemas externos",
        "Modificaciones de funcionalidad",
        "Reportes personalizados",
        "Optimización de rendimiento"
      ]
    },
    {
      name: "Consultoría",
      price: "$95/hora",
      icon: Book,
      features: [
        "Análisis de procesos",
        "Recomendaciones de mejora",
        "Planificación de implementación",
        "Capacitación especializada",
        "Auditoría de sistemas"
      ]
    },
    {
      name: "Soporte Técnico",
      price: "$60/hora",
      icon: Headphones,
      features: [
        "Resolución de incidencias",
        "Mantenimiento correctivo",
        "Actualizaciones de sistema",
        "Soporte remoto",
        "Diagnóstico de problemas"
      ]
    }
  ];

  return (
    <div className="w-full p-6 space-y-8">
      <h2 className="text-2xl text-center text-blue-600 font-bold mb-6">
        {companyName} - Planes de Servicio
      </h2>

      <div className="flex flex-col items-center space-y-6">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <div className="w-full">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
                activeTab === 'subscription'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            >
              <CreditCard size={20} />
              <span>Planes por Suscripción</span>
            </button>
            <button
              onClick={() => setActiveTab('hourly')}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
                activeTab === 'hourly'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            >
              <Clock size={20} />
              <span>Servicios por Hora</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(activeTab === 'subscription' ? subscriptionPlans : hourlyPlans).map((plan, index) => (
              <div 
                key={index}
                className={`relative p-6 bg-white rounded-lg shadow-lg border-2 ${
                  plan.recommended ? 'border-blue-500' : 'border-transparent'
                } hover:shadow-xl transition-shadow`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Recomendado
                    </span>
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  {React.createElement(plan.icon, {
                    size: 40,
                    className: "text-blue-600"
                  })}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
                <p className="text-2xl text-center text-blue-600 font-bold mb-6">{plan.price}</p>
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <ChevronRight className="text-blue-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  {activeTab === 'subscription' ? 'Seleccionar Plan' : 'Contactar'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onPrevious}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Anterior
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Volver al Inicio
          </button>
        </div>

        <div className="flex space-x-2">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePlans;