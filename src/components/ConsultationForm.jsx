// ConsultationForm.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const ConsultationForm = ({ onAddConsultation, editIndex, setEditIndex }) => {
  const [newConsultation, setNewConsultation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNewConsultation = (event) => {
    setNewConsultation(event.target.value);
  };

  const handleAddConsultation = () => {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      newConsultation.trim() !== ""
    ) {
      const newConsultationObject = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        consultation: newConsultation,
      };
      onAddConsultation(newConsultationObject);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setNewConsultation("");
    } else {
      toast.error("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className="rounded bg-white p-4">
      <input
        type="text"
        placeholder="Nome"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded text-black outline-none"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded text-black outline-none"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="tel"
        placeholder="Número de Telefone"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded text-black outline-none"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <input
        type="text"
        placeholder="Adicionar nova consulta"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded text-black outline-none"
        value={newConsultation}
        onChange={handleNewConsultation}
      />
      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold"
        onClick={handleAddConsultation}
      >
        {editIndex !== null ? "Editar Consulta" : "Adicionar Consulta"}
      </button>
    </div>
  );
};

export default ConsultationForm;
