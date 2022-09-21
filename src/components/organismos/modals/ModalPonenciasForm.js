import React, { useState } from "react";
import { savePonencia } from "../../../lib/services/ponencias.services";
import PrimaryButton from "../../atomos/PrimaryButton";
import Spinner from "../../atomos/Spinner";
import { FormInput } from "../../moleculas/FormInput";
import { InputDocente } from "../../moleculas/InputDocente";
import Modal from "../../moleculas/Modal";

const initialValues = {
  facultad: "",
  codigo_ug: "",
  nombre_ponencia: "",
  nombre_evento: "",
  base_de_datos_indexada: "",
  codigo_isbn: "",
  tipo_indexacion: "",
  edicion_evento: "",
  organizador_evento: "",
  comite_cientifico: "",
  pais: "",
  ciudad: "",
  fecha_publicacion: "",
  quartil: "",
  factor_impacto: "",
  campo_detallado: "",
  link_publicacion: "",
  filacion_ug: "",
  dominio_cientifico: "",
  linea_investigacion: "",
  sublinea_investigacion: "",
  docentes: [],
};

export const ModalPonenciasForm = ({ isOpen, onClose, title, onChange }) => {
  const [ponenciaForm, setponenciaForm] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key, value) => {
    setponenciaForm({ ...ponenciaForm, [key]: value });
  };

  const addDocente = (docente) => {
    setponenciaForm({
      ...ponenciaForm,
      docentes: [...ponenciaForm.docentes, docente],
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    await savePonencia(ponenciaForm);
    setIsLoading(false);
    setponenciaForm(initialValues);
    onChange();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      center
      className="px-6 pb-8 max-h-[80vh] min-w-[60vw] overflow-y-scroll"
    >
      <FormInput
        value={ponenciaForm.facultad}
        setValue={(value) => handleChange("facultad", value)}
        label="Facultad"
      />

      <FormInput
        value={ponenciaForm.codigo_ug}
        setValue={(value) => handleChange("codigo_ug", value)}
        label="Código UG"
      />

      <FormInput
        value={ponenciaForm.nombre_ponencia}
        setValue={(value) => handleChange("nombre_ponencia", value)}
        label="Nombre Ponencia"
      />

      <FormInput
        value={ponenciaForm.nombre_evento}
        setValue={(value) => handleChange("nombre_evento", value)}
        label="Nombre Evento"
      />

      <FormInput
        value={ponenciaForm.base_de_datos_indexada}
        setValue={(value) => handleChange("base_de_datos_indexada", value)}
        label="Base de datos indexada"
      />

      <FormInput
        value={ponenciaForm.codigo_isbn}
        setValue={(value) => handleChange("codigo_isbn", value)}
        label="Código ISBN"
      />

      <FormInput
        value={ponenciaForm.tipo_indexacion}
        setValue={(value) => handleChange("tipo_indexacion", value)}
        label="Tipo de Indexación"
      />

      <FormInput
        value={ponenciaForm.edicion_evento}
        setValue={(value) => handleChange("edicion_evento", value)}
        label="Edicion Evento"
      />

      <FormInput
        value={ponenciaForm.organizador_evento}
        setValue={(value) => handleChange("organizador_evento", value)}
        label="Organizador Evento"
      />

      <FormInput
        value={ponenciaForm.comite_cientifico}
        setValue={(value) => handleChange("comite_cientifico", value)}
        label="Comite Científico"
      />

      <FormInput
        value={ponenciaForm.pais}
        setValue={(value) => handleChange("pais", value)}
        label="País"
      />

      <FormInput
        value={ponenciaForm.ciudad}
        setValue={(value) => handleChange("ciudad", value)}
        label="Ciudad"
      />

      <FormInput
        value={ponenciaForm.fecha_publicacion}
        setValue={(value) => handleChange("fecha_publicacion", value)}
        label="Fecha Publicacion"
      />

      <FormInput
        value={ponenciaForm.quartil}
        setValue={(value) => handleChange("quartil", value)}
        label="Quartil"
      />

      <FormInput
        value={ponenciaForm.factor_impacto}
        setValue={(value) => handleChange("factor_impacto", value)}
        label="Factor de impacto"
      />

      <FormInput
        value={ponenciaForm.campo_detallado}
        setValue={(value) => handleChange("campo_detallado", value)}
        label="Campo Detallado"
      />
      <FormInput
        value={ponenciaForm.link_publicacion}
        setValue={(value) => handleChange("link_publicacion", value)}
        label="Link publicacion"
      />

      <FormInput
        value={ponenciaForm.filacion_ug}
        setValue={(value) => handleChange("filacion_ug", value)}
        label="Filacion UG"
      />

      <FormInput
        value={ponenciaForm.dominio_cientifico}
        setValue={(value) => handleChange("dominio_cientifico", value)}
        label="Dominio Científico"
      />

      <FormInput
        value={ponenciaForm.linea_investigacion}
        setValue={(value) => handleChange("linea_investigacion", value)}
        label="Linea Investigación"
      />

      <FormInput
        value={ponenciaForm.sublinea_investigacion}
        setValue={(value) => handleChange("sublinea_investigacion", value)}
        label="Sublinea Investigación"
      />

      <InputDocente form={ponenciaForm} addDocente={addDocente} />

      <div className="w-full flex justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <PrimaryButton
            text="Enviar"
            handleClick={handleSave}
            className="w-10/12 mt-12"
          />
        )}
      </div>
    </Modal>
  );
};
