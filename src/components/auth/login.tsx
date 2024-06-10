// login

import { useState } from "react";
import InputLabel from "../input/InputLabel";
import Button from "../input/Button";
import type { User } from "../../types/User";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);
  function handleSubmit() {
    const gql = `
    query Query($username: String, $password: String) {
      login(username: $username, password: $password) {
        ID
        USERNAME
        LAST_TOKEN
      }
    }
    `;
    const variables = {
      username: email,
      password: password,
    };
    fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql,
        variables: variables,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setWrongCredentials(true);
          setPassword("");
          return;
        } else {
          setWrongCredentials(false);
          const user: User = {
            ID: data.data.login.ID,
            USERNAME: data.data.login.USERNAME,
            LAST_TOKEN: data.data.login.LAST_TOKEN,
          };
          sessionStorage.setItem("user", JSON.stringify(user));
          window.location.href = "/";
        }
      });
  }

  return (
    <div className="">
      {wrongCredentials && (
        <div className="bg-red-500 p-2 text-white text-center">
          Mauvais identifiants
        </div>
      )}
      <InputLabel
        id="email"
        label="Email"
        type="email"
        value={email}
        name="email"
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <InputLabel
        id="password"
        label="Mot de passe"
        type="password"
        value={password}
        name="password"
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <div className="flex flex-row justify-between p-10">
        <Button
          id="submit"
          text="Se connecter"
          color="green"
          type="button"
          callback={() => {
            handleSubmit();
          }}
        />
        <Button
          id="register"
          text="S'inscrire"
          color="blue"
          type="button"
          callback={() => {}}
        />
      </div>
    </div>
  );
};

export default LoginForm;
