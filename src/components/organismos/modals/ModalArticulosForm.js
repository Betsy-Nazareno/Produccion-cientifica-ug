import React, { useState } from "react";
import { saveArticle } from "../../../lib/services/articulos.services";
import PrimaryButton from "../../atomos/PrimaryButton";
import Spinner from "../../atomos/Spinner";
import { FormInput } from "../../moleculas/FormInput";
import { InputDocente } from "../../moleculas/InputDocente";
import Modal from "../../moleculas/Modal";

const initialValues = {
  facultad: "",
  codigo_ug: "",
  titulo: "",
  base_de_datos_indexada: "",
  codigo_isbn: "",
  tipo_indexacion: "",
  nombre_revista: "",
  numero_revista: "",
  quartil: "",
  factor_impacto: "",
  campo_detallado: "",
  estado: "",
  fecha_publicacion: "",
  link_publicacion: "",
  link_revista: "",
  filacion_ug: "",
  revision_por_pares: "",
  dominio_cientifico: "",
  linea_investigacion: "",
  sublinea_investigacion: "",
  docentes: [],
};

export const ModalArticulosForm = ({ isOpen, onClose, title, onChange }) => {
  const [articuloForm, setarticuloForm] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key, value) => {
    setarticuloForm({ ...articuloForm, [key]: value });
  };

  const addDocente = (docente) => {
    setarticuloForm({
      ...articuloForm,
      docentes: [...articuloForm.docentes, docente],
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    await saveArticle(articuloForm);
    setIsLoading(false);
    setarticuloForm(initialValues);
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
        value={articuloForm.facultad}
        setValue={(value) => handleChange("facultad", value)}
        label="Facultad"
      />

      <FormInput
        value={articuloForm.codigo_ug}
        setValue={(value) => handleChange("codigo_ug", value)}
        label="Código UG"
      />

      <FormInput
        value={articuloForm.titulo}
        setValue={(value) => handleChange("titulo", value)}
        label="Título Publicación"
      />

      <FormInput
        value={articuloForm.base_de_datos_indexada}
        setValue={(value) => handleChange("base_de_datos_indexada", value)}
        label="Base de datos indexada"
      />

      <FormInput
        value={articuloForm.codigo_isbn}
        setValue={(value) => handleChange("codigo_isbn", value)}
        label="Código ISBN"
      />

      <FormInput
        value={articuloForm.tipo_indexacion}
        setValue={(value) => handleChange("tipo_indexacion", value)}
        label="Tipo indexación"
      />

      <FormInput
        value={articuloForm.nombre_revista}
        setValue={(value) => handleChange("nombre_revista", value)}
        label="Nombre Revista"
      />

      <FormInput
        value={articuloForm.numero_revista}
        setValue={(value) => handleChange("numero_revista", value)}
        label="Número Revista"
      />

      <FormInput
        value={articuloForm.quartil}
        setValue={(value) => handleChange("quartil", value)}
        label="Quartil"
      />

      <FormInput
        value={articuloForm.factor_impacto}
        setValue={(value) => handleChange("factor_impacto", value)}
        label="Factor de impacto"
      />

      <FormInput
        value={articuloForm.fecha_publicacion}
        setValue={(value) => handleChange("fecha_publicacion", value)}
        label="Fecha Publicacion"
      />

      <FormInput
        value={articuloForm.campo_detallado}
        setValue={(value) => handleChange("campo_detallado", value)}
        label="Campo Detallado"
      />

      <FormInput
        value={articuloForm.estado}
        setValue={(value) => handleChange("estado", value)}
        label="Estado"
      />
      <FormInput
        value={articuloForm.link_publicacion}
        setValue={(value) => handleChange("link_publicacion", value)}
        label="Link publicacion"
      />

      <FormInput
        value={articuloForm.link_revista}
        setValue={(value) => handleChange("link_revista", value)}
        label="Link Revista"
      />

      <FormInput
        value={articuloForm.filacion_ug}
        setValue={(value) => handleChange("filacion_ug", value)}
        label="Filacion UG"
      />

      <FormInput
        value={articuloForm.dominio_cientifico}
        setValue={(value) => handleChange("dominio_cientifico", value)}
        label="Dominio Científico"
      />

      <FormInput
        value={articuloForm.linea_investigacion}
        setValue={(value) => handleChange("linea_investigacion", value)}
        label="Linea Investigación"
      />

      <FormInput
        value={articuloForm.sublinea_investigacion}
        setValue={(value) => handleChange("sublinea_investigacion", value)}
        label="Sublinea Investigación"
      />

      <InputDocente form={articuloForm} addDocente={addDocente} />

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
