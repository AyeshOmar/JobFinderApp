import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: formData.password }),
      });

      if (!response.ok) throw new Error("Erreur lors de la réinitialisation");
      alert("Mot de passe réinitialisé avec succès !");
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl px-8 py-6 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Réinitialiser le mot de passe</h2>

      {/* Password */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full mb-4">
        <RiLockPasswordFill className="text-gray-400 mr-3" />
        <input
          type="password"
          name="password"
          placeholder="Nouveau mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="flex-1 bg-transparent outline-none text-gray-700 font-medium"
          required
        />
      </div>

      {/* Confirm Password */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full mb-6">
        <RiLockPasswordFill className="text-gray-400 mr-3" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="flex-1 bg-transparent outline-none text-gray-700 font-medium"
          required
        />
      </div>

      <input
        type="submit"
        value="Réinitialiser"
        className="w-full bg-pink-400 text-white font-semibold py-3 rounded-full hover:bg-blue-500 transition"
      />
    </form>
  );
};

export default ResetPassword;
