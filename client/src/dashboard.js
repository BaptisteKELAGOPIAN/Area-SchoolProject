import React, { useState } from "react"
import { ReactDOM } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import "./css/cover.css"
import "./css/dropdown_menu.css"
import "./css/popup.css"

export default function (props) {
	const navigate = useNavigate()
  const logout = (e) => {

		e.preventDefault()
		axios
			.post("http://localhost:8080/auth/logout", {
			})
			.then((res) => {
				console.log(res)
        localStorage.removeItem(res.data.token)
				navigate("/")
				console.log(res.data.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}

    const github = (e) => {

		e.preventDefault()
		axios
			.post("http://localhost:8080/github/commit", {
				email: e.target.github.value, //token
        password: e.target.repo.value, //repos
        name : e.target.Mail.value //mail
			})
			.then((res) => {
				console.log(res)
				console.log(res.data.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}
  const weather = (e) => {

		e.preventDefault()
		axios
			.post("http://localhost:8080/meteo/city", {
        name : e.target.city.value //city
			})
			.then((res) => {
				console.log(res)
				console.log(res.data.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}

  const notion = (e) => {

		e.preventDefault()
		axios
			.post("http://localhost:8080/notion/comment", {
        name : e.target.name.value, //comment
        id : e.target.id.value //id
			})
			.then((res) => {
				console.log(res)
				console.log(res.data.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}

  const riot = (e) => {

		e.preventDefault()
		axios
			.post("http://localhost:8080/riot/pseudo", {
        name : e.target.pseudo.value, //comment
        email : e.target.Mail.value //id
			})
			.then((res) => {
				console.log(res)
				console.log(res.data.token)
			})
			.catch((err) => {
				console.log(err)
			})
	}

    return  (
    <html lang="en" class="h-100">
      <head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content=""></meta>
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"></meta>
        <meta name="generator" content="Hugo 0.84.0"></meta>
        <title>AREA Project</title>
      </head>
      <body class="d-flex h-100 text-center text-white bg-dark">
        
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-5">
        <div>
          <h3 class="float-md-start mb-0">AREA Project</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            {/* <a class="nav-link" href="/git">Github</a>
            <a class="nav-link" href="#">Contact</a> */}
          </nav>
        </div>
      </header>

      <main class="px-3">
        <h1>AREA Project.</h1>
        <p class="lead">Welcome to the AREA Project homepage. 
        <br/> This one consists in making reactions according to triggers. 
        <br/><br/> Example : The temperature of my city changes, so I receive an email about this incident.
        <br/><br/> Configure if below, your actions and your triggers to have an optimal experience.
        </p>

        {/* Github API */}
        <div class="dropdown">
        <input type="checkbox" id="dropdown" class="d-none"></input>

        <label class="dropdown__face" for="dropdown">
        <img src="https://cdn3.emoji.gg/emojis/3716-blurple-github.png" width="50px" height="50px"></img>
          <div class="dropdown__text">Github</div>

          <div class="dropdown__arrow"></div>
        </label>

        <ul class="dropdown__items"><form className="Auth-form" onSubmit={github}>
        <a class="button" href="#popup"><img src="https://cdn3.emoji.gg/emojis/4015-info.png" width="30px" height="30px" alt="info"></img></a>
          <div class="popup" id="popup">
            <div class="popup-inner">
              <div class="popup-text">
                1. Go to your Github accoun<br/>
                2. Click on your profile pictur<br/>
                3. Click on Setting<br/>
                4. Click on Developer setting<br/>
                5. Click on Personal access token<br/>
                6. Click on Fine-Grained token<br/>
                7. Click on Generate new toke<br/>
                8. Enter a name for your toke<br/>
                9. Select the scope you wan<br/>
                10. Click on Generate toke<br/>
                11. Copy the toke<br/>
                12. Paste the token in the fiel<br/>
                Enter your repo name in the field below<br/>
                Enter your mail in the field below<br/>
                </div>
              <a class="popup__close" href="#">X</a>
            </div>
          </div>
                    <div className="form-group mt-3">
                        <label>Github token</label>
                        <input
                            type="github"
                            name="github"
                            className="form-control mt-1"
                            placeholder="Token"
                        />

                          <label>Repository to select</label>
                          <input
                              type="repo"
                              name="repo"
                              className="form-control mt-1"
                              placeholder="Repository"
                          />

                          <label>Mail of reception</label>
                          <input
                              type="Mail"
                              name="Mail"
                              className="form-control mt-1"
                              placeholder="Mail"
                          />
                        <button type="submit" className="btn-color btn btn-primary"> Send </button>
                    </div>
                </form>
        </ul>
        </div>

        {/* Spotify API */}
        <div class="dropdown2 ">
          <input type="checkbox" id="dropdown2" class="d-none"></input>

          <label class="dropdown__face" for="dropdown2">
          <img src="https://cdn3.emoji.gg/emojis/3961-spotify.png" width="50px" height="50px"></img>
            <div class="dropdown__text">Spotify</div>

            <div class="dropdown__arrow"></div>
          </label>
          <ul class="dropdown__items"><form className="Auth-form"></form></ul>
        </div>

        {/* Meteo API */}
        <div class="dropdown3 ">
          <input type="checkbox" id="dropdown3" class="d-none"></input>

          <label class="dropdown__face" for="dropdown3">
          <img src="https://cdn-icons-png.flaticon.com/512/3767/3767036.png" width="50px" height="50px"></img>
            <div class="dropdown__text">Weather</div>

            <div class="dropdown__arrow"></div>
          </label>
          <ul class="dropdown__items"><form className="Auth-form" onSubmit={weather}>
        <a class="button" href="#popup2"><img src="https://cdn3.emoji.gg/emojis/4015-info.png" width="30px" height="30px" alt="info"></img></a>
          <div class="popup2" id="popup2">
            <div class="popup2-inner">
              <div class="popup-text">Each time the temperature switch in the city you write, you will receive an email at the adress email.<br/>
              Enter your city in the field below<br/>
              Enter your mail in the field below<br/>
              </div>
              <a class="popup2__close" href="#">X</a>
            </div>
          </div>
            <div className="form-group mt-3">
                        <label>City</label>
                        <input
                            type="city"
                            name="city"
                            className="form-control mt-1"
                            placeholder="Your city"
                        />
                        <button type="submit" className="btn-color btn btn-primary"> Send </button>
                    </div>
                </form>
        </ul>
        </div>

        {/* Notion API */}
        <div class="dropdown4 ">
          <input type="checkbox" id="dropdown4" class="d-none"></input>

          <label class="dropdown__face" for="dropdown4">
          <img src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" width="50px" height="50px"></img>
            <div class="dropdown__text">
            </div>

            <div class="dropdown__arrow"></div>
          </label>
          <ul class="dropdown__items"><form className="Auth-form" onSubmit={notion}>
        <a class="button" href="#popup3"><img src="https://cdn3.emoji.gg/emojis/4015-info.png" width="30px" height="30px" alt="info"></img></a>
          <div class="popup3" id="popup3">
            <div class="popup3-inner">
              <div class="popup-text">
                1. Go to your Notion accoun<br/>
                2. Click on your profile pictur<br/>
                3. Click on Setting<br/>
                4. Click on Developer setting<br/>
                5. Click on Personal access token<br/>
                6. Click on Fine-Grained token<br/>
                7. Click on Generate new token<br/>
                Enter your token in the field below<br/>
                Enter your block id in the field below<br/>
                When a comment is added to your block, you will receive an notification on Discord.<br/>
              </div>
              <a class="popup3__close" href="#">X</a>
            </div>
          </div>
            <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="name"
                            name="name"
                            className="form-control mt-1"
                            placeholder="Your name"
                        />
                        <label>ID</label>
                        <input
                            type="id"
                            name="id"
                            className="form-control mt-1"
                            placeholder="Your ID of your Hook"
                        />
                        <button type="submit" className="btn-color btn btn-primary"> Send </button>
                    </div>
                </form>
        </ul>
        </div>

        {/* RIOT(LOL) API */}
        <div class="dropdown5 ">
          <input type="checkbox" id="dropdown5" class="d-none"></input>

          <label class="dropdown__face" for="dropdown5">
          <img src="https://cdn3.emoji.gg/emojis/7590-lol-logo.png" width="50px" height="50px"></img>
            <div class="dropdown__text">League of Legend API</div>

            <div class="dropdown__arrow"></div>
          </label>
          <ul class="dropdown__items"><form className="Auth-form" onSubmit={riot}>
        <a class="button" href="#popup4"><img src="https://cdn3.emoji.gg/emojis/4015-info.png" width="30px" height="30px" alt="info"></img></a>
          <div class="popup4" id="popup4">
            <div class="popup4-inner">
              <div class="popup-text">
              When a player is in a game you will recieve an email at the adress you submitted.<br/>
              Enter your Pseudo in the field below<br/>
              Enter your mail in the field below<br/>
              </div>
              <a class="popup4__close" href="#">X</a>
            </div>
          </div>
            <div className="form-group mt-3">
                        <label>Pseudo</label>
                        <input
                            type="pseudo"
                            name="pseudo"
                            className="form-control mt-1"
                            placeholder="The pseudo"
                        />
                        <label>Mail of reception</label>
                        <input
                            type="Mail"
                            name="Mail"
                            className="form-control mt-1"
                            placeholder="Mail"
                        />
                        <button type="submit" className="btn-color btn btn-primary"> Send </button>
                    </div>
                </form>
          </ul>
        </div>

        {/* Global API */}
        {/* <div class="dropdown5 ">
          <input type="checkbox" id="dropdown2" class="d-none"></input>

          <label class="dropdown__face" for="dropdown2">
          <img src="https://cdn3.emoji.gg/emojis/1127-discord.png" width="50px" height="50px"></img>
            <div class="dropdown__text">API</div>

            <div class="dropdown__arrow"></div>
          </label>
          <ul class="dropdown__items"><form className="Auth-form" onSubmit={github}></form></ul>
        </div> */}

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      </main>

      <footer class="mt-9 text-white-50">
        <a onClick={logout} class="btn btn-lg btn-secondary fw-bold border-white bg-white txt-color" >Logout</a>
        {/* <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p> */}
      </footer>
    </div>


        
      </body>
  </html>

    )
}



