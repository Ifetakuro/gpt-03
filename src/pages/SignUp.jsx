import React, { useState } from "react";
import AuthLayout from "../components/auth";
import InputWithLabel from "../components/inputWithLabel";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [confirmPassword, seConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData?.password !== confirmPassword) {
      setError("Password Mismatch");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
      });
      seConfirmPassword("");
      setError("");
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
    <AuthLayout buttonText={"Sign Up"} loading={loading} onSubmit={onSubmit}>
      <InputWithLabel
        name={"firstname"}
        label={"Firstname"}
        type="text"
        placeholder="Mary"
        value={formData.firstname}
        onChange={handleChange}
      />
      <InputWithLabel
        name={"lastname"}
        label={"Lastname"}
        type="text"
        placeholder="Jane"
        value={formData.lastname}
        onChange={handleChange}
      />
      <InputWithLabel
        name={"username"}
        label={"Username"}
        type="text"
        placeholder="MayJayy"
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
      <InputWithLabel
        name={"confrimPassword"}
        label={"Confirm Password"}
        type="password"
        placeholder="*******"
        value={confirmPassword}
        onChange={(e) => seConfirmPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </AuthLayout>
  );
};

export default SignUp;
