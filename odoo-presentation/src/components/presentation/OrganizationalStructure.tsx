'use client';

import React from 'react';
import { 
  UserCircle, 
  Code, 
  HeartHandshake, 
  Calculator, 
  MessagesSquare,
  Shield,
  Briefcase,
  LucideIcon
} from 'lucide-react';

// Definimos los tipos necesarios
type ColorVariant = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'yellow';

interface Role {
  title: string;
  count: number;
  key?: boolean;
}

interface Department {
  name: string;
  icon: LucideIcon;
  roles: Role[];
  totalCount: number;
  color: ColorVariant;
}

const OrganizationalStructure = () => {
  const departments: Department[] = [
    {
      name: "Dirección",
      icon: Briefcase,
      roles: [
        { title: "CEO/Director General", count: 1, key: true },
        { title: "CTO/Director Técnico", count: 1, key: true },
        { title: "CFO/Director Financiero", count: 1, key: true }
      ],
      totalCount: 3,
      color: "blue"
    },
    {
      name: "Gestión de Proyectos",
      icon: Shield,
      roles: [
        { title: "Program Manager", count: 1, key: true }
      ],
      totalCount: 1,
      color: "purple"
    },
    {
      name: "Desarrollo",
      icon: Code,
      roles: [
        { title: "Líder de Desarrollo", count: 1, key: true },
        { title: "Desarrolladores Full-Time", count: 2 },
        { title: "Desarrolladores Part-Time", count: 3 },
        { title: "QA/Control de Calidad", count: 1 }
      ],
      totalCount: 7,
      color: "green"
    },
    {
      name: "Implementación",
      icon: HeartHandshake,
      roles: [
        { title: "Líder de Implementación", count: 1, key: true },
        { title: "Consultores de Implementación", count: 2 }
      ],
      totalCount: 3,
      color: "orange"
    },
    {
      name: "Soporte",
      icon: MessagesSquare,
      roles: [
        { title: "Técnicos de Soporte", count: 2 }
      ],
      totalCount: 2,
      color: "red"
    },
    {
      name: "Contabilidad",
      icon: Calculator,
      roles: [
        { title: "Contador Senior", count: 1, key: true },
        { title: "Asistente Contable", count: 1 }
      ],
      totalCount: 2,
      color: "yellow"
    }
  ];

  const colorVariants: Record<ColorVariant, string> = {
    blue: "bg-blue-100 border-blue-300 text-blue-800",
    purple: "bg-purple-100 border-purple-300 text-purple-800",
    green: "bg-green-100 border-green-300 text-green-800",
    orange: "bg-orange-100 border-orange-300 text-orange-800",
    red: "bg-red-100 border-red-300 text-red-800",
    yellow: "bg-yellow-100 border-yellow-300 text-yellow-800"
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Estructura Organizativa
        </h2>
        <p className="text-gray-600">
          Total de Personal: {departments.reduce((acc, dept) => acc + dept.totalCount, 0)} personas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`rounded-lg border-2 p-4 ${colorVariants[dept.color]} transition-all hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-4">
              {React.createElement(dept.icon, { className: "w-6 h-6" })}
              <h3 className="font-bold text-lg">{dept.name}</h3>
              <span className="ml-auto bg-white px-2 py-1 rounded-full text-sm">
                {dept.totalCount}
              </span>
            </div>

            <div className="space-y-2">
              {dept.roles.map((role, roleIndex) => (
                <div
                  key={roleIndex}
                  className={`flex items-center justify-between ${
                    role.key ? 'font-semibold' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {role.key && (
                      <UserCircle className="w-4 h-4" />
                    )}
                    <span>{role.title}</span>
                  </div>
                  <span className="text-sm bg-white/50 px-2 py-1 rounded-full">
                    {role.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm">
        {departments.map((dept, index) => (
          <div key={index} className={`p-2 rounded ${colorVariants[dept.color]}`}>
            <strong>{dept.totalCount}</strong>
            <br />
            {dept.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationalStructure;