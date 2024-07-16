import React, { useState } from "react"
import axios from "axios"
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';





export default function (props) {

	let [authMode, setAuthMode] = useState("signin")
	const navigate = useNavigate()

	const changeAuthMode = () => {
		setAuthMode(authMode === "signin" ? "signup" : "signin")
		console.log(authMode)
	}

	//axios post request
	//registration
	const register = (e) => {

		e.preventDefault()
		axios
			.post("http://localhost:8080/auth/register", {
				email: e.target.email.value,
				password: e.target.password.value,
			})
			.then((res) => {
				console.log(res)
				localStorage.setItem("token", res.data.token)
				navigate("/dashboard")
				console.log(res.data.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const login = (e) => {
		e.preventDefault(
		axios
			.post("http://localhost:8080/auth/login", {
				email: e.target.email.value,
				password: e.target.password.value,
			})
			.then((res) => {
				console.log(res)
				localStorage.setItem("token", res.data.token)
				navigate("/dashboard")
			})
			.catch((err) => {
				console.log(err)
			}))

	}



	if (authMode === "signin") {
		return (
		<div className="container">
			<div className="Auth-form-container">
				<form className="Auth-form" onSubmit={login} >
					<div className="Auth-form-content">
					<div id="alert" > </div>
						<h3 className="Auth-form-title">Log in</h3>
						<div className="text-center">
						Not yet registered ?{" "}
							<span className="link-light" onClick={changeAuthMode}>
							Register
							</span>
						</div>
						<div className="form-group mt-3">
							<label>E-mail</label>
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="Entrez votre adresse e-mail"
							/>
						</div>
						<div className="form-group mt-3">
							<label>Password</label>
							<input
								type="password"
								name="password"
								className="form-control mt-1"
								placeholder="Entrez votre mot de passe"
							/>
						</div>
						<div className="d-grid gap-2 mt-3">
							<button type="submit" className="btn-color btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		)
	} else {
		return (
			<div className="Auth-form-container">
				<form className="Auth-form" onSubmit={register}>
					<div className="Auth-form-content">
						<h3 className="Auth-form-title">Sign up</h3>

						<div className="text-center">
						Already registered?{" "}
							<span className="link-light" onClick={changeAuthMode}>
							Log in
							</span>
						</div>
						<div className="form-group mt-3">
							<label>Name</label>
							<input
								type="name"
								name="name"
								className="form-control mt-1"
								placeholder="ex :  Bouna Diallo"
							/>
						</div>
						<div className="form-group mt-3">
							<label>E-mail</label>
							<input
								type="email"
								name="email"
								className="form-control mt-1"
								placeholder="Adresse E-mail"
							/>
						</div>
						<div className="form-group mt-3">
							<label>Password</label>
							<input
								type="password"
								name="password"
								className="form-control mt-1"
								placeholder="Mot de Passe"
							/>
						</div>
						<div className="d-grid gap-2 mt-3">
							<button type="submit" className="btn-color btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}