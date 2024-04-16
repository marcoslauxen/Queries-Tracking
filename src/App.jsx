import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConsultationTable from "./components/ConsultationTable";

const App = () => {
  const [newConsultation, setNewConsultation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consultations, setConsultations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedConsultations = JSON.parse(
      localStorage.getItem("consultations")
    );
    if (storedConsultations?.length > 0) {
      setConsultations(storedConsultations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("consultations", JSON.stringify(consultations));
  }, [consultations]);

  const handleNewConsultation = (event) => {
    setNewConsultation(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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
      if (editIndex !== null) {
        const updatedConsultations = [...consultations];
        updatedConsultations[editIndex] = newConsultationObject;
        setConsultations(updatedConsultations);
        setEditIndex(null);
        toast.success("Consulta editada com sucesso!");
      } else {
        setConsultations([...consultations, newConsultationObject]);
        toast.success("Consulta adicionada com sucesso!");
      }
      setName("");
      setEmail("");
      setPhoneNumber("");
      setNewConsultation("");
    } else {
      toast.error("Por favor, preencha todos os campos!");
    }
  };

  const handleEditConsultation = (index) => {
    const consultationToEdit = consultations[index];
    setName(consultationToEdit.name);
    setEmail(consultationToEdit.email);
    setPhoneNumber(consultationToEdit.phoneNumber);
    setNewConsultation(consultationToEdit.consultation);
    setEditIndex(index);
  };

  const handleDeleteConsultation = (index) => {
    const updatedConsultations = [...consultations];
    updatedConsultations.splice(index, 1);
    setConsultations(updatedConsultations);
    setEditIndex(null);
    toast.success("Consulta excluída com sucesso!");
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredConsultations = consultations.filter((consultation) =>
    consultation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ml-40 mr-40 p-4 mt-8 rounded bg-gray-200">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Rastreamento de Consultas de Clientes
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
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
        <div className="rounded bg-white p-4">
          <input
            type="text"
            placeholder="Buscar Cliente"
            className="w-1/3 px-4 py-2 mb-2 border border-gray-300 rounded text-black outline-none"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />

          <ConsultationTable
            consultations={consultations}
            filteredConsultations={filteredConsultations}
            handleEditConsultation={handleEditConsultation}
            handleDeleteConsultation={handleDeleteConsultation}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
