import React, { useState } from "react";
import { saveChapter } from "../../../lib/services/capitulos.services";
import PrimaryButton from "../../atomos/PrimaryButton";
import Spinner from "../../atomos/Spinner";
import { FormInput } from "../../moleculas/FormInput";
import { InputDocente } from "../../moleculas/InputDocente";
import Modal from "../../moleculas/Modal";

const initialValues = {
  facultad: "",
  codigo_ug: "",
  titulo_libro: "",
  titulo_capitulo: "",
  codigo_isbn: "",
  editor_compilador: "",
  paginas: "",
  fecha_publicacion: "",
  link_publicacion: "",
  campo_detallado: "",
  filacion_ug: "",
  revision_por_pares: "",
  dominio_cientifico: "",
  linea_investigacion: "",
  sublinea_investigacion: "",
  docentes: [],
};

export const ModaCapitulosForm = ({ isOpen, onClose, title, onChange }) => {
  const [capituloForm, setcapituloForm] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key, value) => {
    setcapituloForm({ ...capituloForm, [key]: value });
  };

  const addDocente = (docente) => {
    setcapituloForm({
      ...capituloForm,
      docentes: [...capituloForm.docentes, docente],
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    await saveChapter(capituloForm);
    setcapituloForm(initialValues);
    setIsLoading(false);
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
        value={capituloForm.facultad}
        setValue={(value) => handleChange("facultad", value)}
        label="Facultad"
      />

      <FormInput
        value={capituloForm.codigo_ug}
        setValue={(value) => handleChange("codigo_ug", value)}
        label="Código UG"
      />

      <FormInput
        value={capituloForm.titulo_libro}
        setValue={(value) => handleChange("titulo_libro", value)}
        label="Título Libro"
      />

      <FormInput
        value={capituloForm.titulo_capitulo}
        setValue={(value) => handleChange("titulo_capitulo", value)}
        label="Título Capítulo"
      />

      <FormInput
        value={capituloForm.codigo_isbn}
        setValue={(value) => handleChange("codigo_isbn", value)}
        label="Código ISBN"
      />

      <FormInput
        value={capituloForm.editor_compilador}
        setValue={(value) => handleChange("editor_compilador", value)}
        label="Editor/Compilador"
      />

      <FormInput
        value={capituloForm.paginas}
        setValue={(value) => handleChange("paginas", value)}
        label="Páginas"
      />

      <FormInput
        value={capituloForm.fecha_publicacion}
        setValue={(value) => handleChange("fecha_publicacion", value)}
        label="Fecha Publicacion"
      />

      <FormInput
        value={capituloForm.link_publicacion}
        setValue={(value) => handleChange("link_publicacion", value)}
        label="Link publicacion"
      />

      <FormInput
        value={capituloForm.campo_detallado}
        setValue={(value) => handleChange("campo_detallado", value)}
        label="Campo Detallado"
      />

      <FormInput
        value={capituloForm.filacion_ug}
        setValue={(value) => handleChange("filacion_ug", value)}
        label="Filacion UG"
      />

      <FormInput
        value={capituloForm.revision_por_pares}
        setValue={(value) => handleChange("revision_por_pares", value)}
        label="Revision Por Pares"
      />

      <FormInput
        value={capituloForm.dominio_cientifico}
        setValue={(value) => handleChange("dominio_cientifico", value)}
        label="Dominio Científico"
      />

      <FormInput
        value={capituloForm.linea_investigacion}
        setValue={(value) => handleChange("linea_investigacion", value)}
        label="Linea Investigación"
      />

      <FormInput
        value={capituloForm.sublinea_investigacion}
        setValue={(value) => handleChange("sublinea_investigacion", value)}
        label="Sublinea Investigación"
      />

      <InputDocente form={capituloForm} addDocente={addDocente} />

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
