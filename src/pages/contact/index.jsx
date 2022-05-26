import React from "react"

import "./styles.css"

export default function Contact() {
    return (
        <section>
            <h1>
                Contato
            </h1>
            <form action="">
                <div className="container">
                    <input placeholder="Email "className="email espace" type="email" name="email" id="" />

                <div class="form-group full-width">
                        <textarea className="message" name="message" id="message" cols="30" rows="10" placeholder="Escreva sua mensagem"></textarea>
                </div>

                <input type="submit" className="button espace" value="Enviar" />

                </div>
            </form>
        </section>
    )
}