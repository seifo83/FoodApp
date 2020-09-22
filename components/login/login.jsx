
import React, {useRef, useState} from "react";
import {} from "react-native";


const Login = (props) => {
    const usernameRef= useRef(null)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    

    const onSubmitForm= (event) => {
        event.preventDefault()
        //this.props.updateStatus()
        // etErrorEmail({
        //     connected: true
        // })
        console.log(usernameRef.current.value);
 
        const username = usernameRef.current.value
        //const password = this.state.password
        //const mail = this.state.mail
        if (username === "admin" && password === "admin" && email === "admin@gmail.fr"){
            props.updateStatus()
            
        }
    }

    const onChangeField = (event, field) => {


        if(field === "password"){
            setPassword(event.target.value)
            if(event.target.value.length< 3){
                setErrorPassword("Le mot de passe doit faire au moins 3 caractéres !")
            }else{
                setErrorPassword("")
            }
        }
        if(field === "email"){
            setEmail(event.target.value)
            if(event.target.value.length< 8){
                setErrorEmail("L'email doit faire au moins 8 caractéres !")
            }else{
                setErrorEmail("")
            }
        }

    }

        return (
            <>
                <form onSubmit={onSubmitForm}>
                    <div>
                        <label htmlFor="username">Usernanme :</label>
                            <input type="text" id="username" ref={usernameRef} />
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe:</label>
                        <input type="password" id="password" onChange={event => onChangeField(event, "password")} value={password} />
                        {errorPassword !== "" ? <p>{errorPassword}</p> : null }
                    </div>
                    <div>
                        <label htmlFor="mail">Email:</label>
                        <input type="mail" id="mail" onChange={event => onChangeField(event, "email")} value={email} />
                        {/* on rajouter event => this.onChangeField(event, "password")} pour permet à la fonction  de récuprer l'event */}
                        {/* pour rajouter la'ffichage des errors de password  */}
                        {errorEmail !== "" ? <p>{errorEmail}</p> : null }
                    </div>

                    <button type="submit">Envoyer</button>
                    {/* <input type="submit" value="Envoyer" /> */}
                </form>
            </>
        )



}



export default Login