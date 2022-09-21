import React, { useState } from "react";
import { saveBook } from "../../../lib/services/libros.services";
import PrimaryButton from "../../atomos/PrimaryButton";
import Spinner from "../../atomos/Spinner";
import { FormInput } from "../../moleculas/FormInput";
import { InputDocente } from "../../moleculas/InputDocente";
import Modal from "../../moleculas/Modal";

const initialValues = {
  facultad: "",
  codigo_ug: "",
  titulo: "",
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
  docentes: [],
};

export const ModalLibrosForm = ({ isOpen, onClose, title, onChange }) => {
  const [libroForm, setLibroForm] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key, value) => {
    setLibroForm({ ...libroForm, [key]: value });
  };

  const addDocente = (docente) => {
    setLibroForm({ ...libroForm, docentes: [...libroForm.docentes, docente] });
  };

  const handleSave = async () => {
    setIsLoading(true);
    await saveBook(libroForm);
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
        value={libroForm.facultad}
        setValue={(value) => handleChange("facultad", value)}
        label="Facultad"
      />

      <FormInput
        value={libroForm.codigo_ug}
        setValue={(value) => handleChange("codigo_ug", value)}
        label="Código UG"
      />

      <FormInput
        value={libroForm.titulo}
        setValue={(value) => handleChange("titulo", value)}
        label="Título"
      />

      <FormInput
        value={libroForm.codigo_isbn}
        setValue={(value) => handleChange("codigo_isbn", value)}
        label="Código ISBN"
      />

      <FormInput
        value={libroForm.editor_compilador}
        setValue={(value) => handleChange("editor_compilador", value)}
        label="Editor/Compilador"
      />

      <FormInput
        value={libroForm.paginas}
        setValue={(value) => handleChange("paginas", value)}
        label="Páginas"
      />

      <FormInput
        value={libroForm.fecha_publicacion}
        setValue={(value) => handleChange("fecha_publicacion", value)}
        label="Fecha Publicacion"
      />

      <FormInput
        value={libroForm.link_publicacion}
        setValue={(value) => handleChange("link_publicacion", value)}
        label="Link publicacion"
      />

      <FormInput
        value={libroForm.campo_detallado}
        setValue={(value) => handleChange("campo_detallado", value)}
        label="Campo Detallado"
      />

      <FormInput
        value={libroForm.filacion_ug}
        setValue={(value) => handleChange("filacion_ug", value)}
        label="Filacion UG"
      />

      <FormInput
        value={libroForm.revision_por_pares}
        setValue={(value) => handleChange("revision_por_pares", value)}
        label="Revision Por Pares"
      />

      <FormInput
        value={libroForm.dominio_cientifico}
        setValue={(value) => handleChange("dominio_cientifico", value)}
        label="Dominio Científico"
      />

      <FormInput
        value={libroForm.linea_investigacion}
        setValue={(value) => handleChange("linea_investigacion", value)}
        label="Linea Investigación"
      />

      <InputDocente form={libroForm} addDocente={addDocente} />

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
