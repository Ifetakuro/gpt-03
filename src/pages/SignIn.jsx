import React, { useState } from "react";
import AuthLayout from "../components/auth";
import InputWithLabel from "../components/inputWithLabel";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData({
        username: "",
        password: "",
      });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <AuthLayout buttonText={"Sign In"} onSubmit={onSubmit} loading={loading}>
      <InputWithLabel
        name={"username"}
        label={"Username"}
        type="text"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputWithLabel
        name={"password"}
        label={"Password"}
        type="password"
        placeholder="*******"
        value={formData.password}
        onChange={handleChange}
      />
    </AuthLayout>
  );
};

export default SignIn;
