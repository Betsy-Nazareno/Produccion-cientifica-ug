import React, { useEffect, useState } from "react";
import PrimaryButton from "../atomos/PrimaryButton";
import { DetailDocente } from "./DetailDocente";
import { FormInput } from "./FormInput";

const initialValues = {
  nombre: "",
  cedula: "",
  participacion: "",
  modalidad: "",
  facultad: "",
};
export const InputDocente = ({ form, addDocente }) => {
  const [docente, setdocente] = useState(initialValues);
  const [allDocentes, setallDocentes] = useState([]);

  const handleChange = (key, value) => {
    setdocente({ ...docente, [key]: value });
  };

  useEffect(() => {
    if (form) {
      setallDocentes(form?.docentes);
    }
  }, [form]);

  return (
    <div>
      <div className="flex items-center mb-2">
        <p className="text-lg font-semibold pb-2">Docentes</p>
        <div className="bg-gray-200 h-[1px] w-full ml-2" />
      </div>

      {allDocentes?.map((docente) => (
        <DetailDocente docente={docente} />
      ))}

      <div className="border-[1px] border-gray-200 rounded-xl p-4">
        <div className="flex">
          <FormInput
            value={docente.nombre}
            setValue={(value) => handleChange("nombre", value)}
            label="Nombre"
            className="my-1 mx-2 w-2/4"
          />

          <FormInput
            value={docente.cedula}
            setValue={(value) => handleChange("cedula", value)}
            label="cedula"
            className="my-1 mx-2 w-2/4"
          />
        </div>

        <div className="flex">
          <FormInput
            value={docente.participacion}
            setValue={(value) => handleChange("participacion", value)}
            label="Participación"
            className="my-1 mx-2 w-2/4"
          />

          <FormInput
            value={docente.modalidad}
            setValue={(value) => handleChange("modalidad", value)}
            label="Modalidad"
            className="my-1 mx-2 w-2/4"
          />
        </div>
        <FormInput
          value={docente.facultad}
          setValue={(value) => handleChange("facultad", value)}
          label="Facultad"
          className="my-1"
        />

        <div className="flex justify-center">
          <PrimaryButton
            text="+ Agregar docente"
            handleClick={() => {
              addDocente(docente);
              setdocente(initialValues);
            }}
            className="my-2"
          />
        </div>
      </div>
    </div>
  );
};
