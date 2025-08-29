import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";

const ForgetPassword = ({ toggleMode }) => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/forget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Erreur lors de la demande de réinitialisation");
      alert("Un email de réinitialisation a été envoyé !");
      toggleMode();
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl px-8 py-6 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Mot de passe oublié</h2>

      {/* Email */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full mb-6">
        <FaEnvelope className="text-gray-400 mr-3" />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 font-medium"
          required
        />
      </div>

      <input
        type="submit"
        value="Envoyer"
        className="w-full bg-pink-400 text-white font-semibold py-3 rounded-full hover:bg-blue-500 transition mb-3"
      />

      <button
        className="w-full border-2 border-pink-400 text-pink-400 py-2 rounded-full hover:bg-pink-400 hover:text-white transition"
        onClick={toggleMode}
        type="button"
      >
        Retour
      </button>
    </form>
  );
};

export default ForgetPassword;
