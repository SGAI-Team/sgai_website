"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z
    .string()
    .email("Ingresa un email válido")
    .refine(
      (email) => !["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"].some(
        (d) => email.endsWith(`@${d}`)
      ),
      "Por favor usa tu email corporativo"
    ),
  company: z.string().min(2, "Ingresa el nombre de tu empresa"),
  position: z.string().optional(),
  industry: z.string().min(1, "Selecciona una industria"),
  interest: z.string().min(1, "Selecciona una opción"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-12 h-12 text-sgai-success mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-sgai-midnight mb-2">
          Solicitud enviada
        </h3>
        <p className="text-sgai-steel">
          Respondemos en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          Nombre completo *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          Email corporativo *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors"
          placeholder="tu@empresa.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          Empresa *
        </label>
        <input
          id="company"
          type="text"
          {...register("company")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors"
          placeholder="Nombre de tu empresa"
        />
        {errors.company && (
          <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
        )}
      </div>

      {/* Position */}
      <div>
        <label
          htmlFor="position"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          Cargo
        </label>
        <input
          id="position"
          type="text"
          {...register("position")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors"
          placeholder="Tu cargo"
        />
      </div>

      {/* Industry */}
      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          Industria *
        </label>
        <select
          id="industry"
          {...register("industry")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una industria
          </option>
          <option value="mineria">Minería</option>
          <option value="energia">Energía y Oil & Gas</option>
          <option value="construccion">Ingeniería y Construcción</option>
          <option value="industria">Industria y Manufactura</option>
          <option value="otra">Otra</option>
        </select>
        {errors.industry && (
          <p className="text-red-500 text-xs mt-1">{errors.industry.message}</p>
        )}
      </div>

      {/* Interest */}
      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          ¿Qué te interesa? *
        </label>
        <select
          id="interest"
          {...register("interest")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="bpo">Servicio BPO</option>
          <option value="plataforma">Plataforma SGAI</option>
          <option value="ambos">Ambos</option>
          <option value="conocer">Solo quiero conocer más</option>
        </select>
        {errors.interest && (
          <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-sgai-midnight mb-1.5"
        >
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sgai-midnight text-sm focus:outline-none focus:ring-2 focus:ring-sgai-copper/30 focus:border-sgai-copper transition-colors resize-none"
          placeholder="Cuéntanos sobre tu operación..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-copper text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar solicitud"
        )}
      </button>

      <p className="text-xs text-sgai-steel text-center">
        Respondemos en menos de 24 horas hábiles. Tu información no se comparte
        con terceros.
      </p>
    </form>
  );
}
