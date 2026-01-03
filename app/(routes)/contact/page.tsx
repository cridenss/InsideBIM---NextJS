"use client"

import Banner from '@/components/shared/Banner/Banner';
import { useForm, ValidationError } from '@formspree/react';
import './page.scss'

export default function Services() {
  const [state, handleSubmit] = useForm("mrezwpna");
  if (state.succeeded) {
    return <p>Nous avons bien reçu votre demande, nous la traiterons dans les plus brefs délais !</p>;
  }

  return (
    <main className='contact-page'>
      <section className='contact-page__banner'>
        <Banner
          title="Contactez nous"
          description="Une question sur nos services ? Un projet à étudier ? Nous sommes là pour vous conseiller et vous proposer la solution BIM adaptée à vos besoins. Contactez-nous pour un premier échange gratuit et sans engagement."
        />
      </section>

      <section className='contact-page__form'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className='fs-fieldset-title'>Identité</legend>

            <div className="fs-field">
              <input
                id="customer-name"
                name="Nom"
                placeholder='Nom'
              />
            </div>

            <div className="fs-field">
              <input
                id="customer-surname"
                name="Prénom"
                placeholder='Prénom'
              />
            </div>
          </fieldset>

          <fieldset>
            <legend className='fs-fieldset-title'>e-mail</legend>

            <div className="fs-field">
              <input
                id="email"
                type="email"
                name="email"
                placeholder='Email'
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

          </fieldset>

          <fieldset>
            <textarea
              id="message"
              name="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </fieldset>
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}