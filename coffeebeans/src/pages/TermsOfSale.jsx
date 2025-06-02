import React from 'react'
import Title from '../components/Title'

const TermsOfSale = () => {
    return (
        <>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title titlePart1={'TERMS OF'} titlePart2={'SALE / VENTE'} />
            </div>

            <div className='flex flex-col gap-16 my-10 px-6 md:px-24 text-gray-700 font-[Barlow]'>
                {/* ENGLISH VERSION */}
                <article className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold text-gray-900'>Terms and Conditions of Sale — CoffeeBeans</h2>
                    <p><strong>1. Company Information:</strong><br />
                        Company name: CoffeeBeans SARL<br />
                        Address: 12 Rue des Arômes, 75000 Paris, France<br />
                        SIRET: 123 456 789 00010<br />
                        Email: info@coffeebeans.pro<br />
                        Phone: +33 1 23 45 67 89
                    </p>
                    <p><strong>2. Purpose:</strong> These Terms and Conditions of Sale govern purchases made on the CoffeeBeans website between the company and any individual customer.</p>
                    <p><strong>3. Products:</strong> Products are described as accurately as possible. Images are for illustrative purposes only.</p>
                    <p><strong>4. Prices:</strong> Prices are listed in euros, including VAT. CoffeeBeans reserves the right to modify prices at any time.</p>
                    <p><strong>5. Orders:</strong> Placing an order implies acceptance of these terms. We reserve the right to refuse any order in case of previous disputes.</p>
                    <p><strong>6. Payment:</strong> Payments must be made at the time of ordering via secure credit card transactions.</p>
                    <p><strong>7. Delivery:</strong> Products are delivered to the address provided. Delivery times are indicative only.</p>
                    <p><strong>8. Withdrawal:</strong> Customers have 14 days to exercise their legal right of withdrawal.</p>
                    <p><strong>9. Personal Data:</strong> Collected data is used solely for order processing, in compliance with GDPR regulations.</p>
                    <p><strong>10. Applicable Law:</strong> These conditions are governed by French law. Disputes will seek an amicable resolution first.</p>
                </article>

                <hr className='my-8 border-gray-400' />
                <h3 className='text-center text-gray-600 italic'>Version française</h3>

                {/* FRANÇAIS VERSION */}
                <article className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold text-gray-900'>Conditions Générales de Vente — CoffeeBeans</h2>
                    <p><strong>1. Informations sur la société :</strong><br />
                        Nom de l'entreprise : CoffeeBeans SARL<br />
                        Adresse : 12 Rue des Arômes, 75000 Paris, France<br />
                        SIRET : 123 456 789 00010<br />
                        Email : info@coffeebeans.pro<br />
                        Téléphone : +33 1 23 45 67 89
                    </p>
                    <p><strong>2. Objet :</strong> Les présentes CGV régissent les ventes effectuées sur le site CoffeeBeans entre la société et tout client particulier.</p>
                    <p><strong>3. Produits :</strong> Les produits sont décrits aussi précisément que possible. Les photos sont non contractuelles.</p>
                    <p><strong>4. Prix :</strong> Les prix sont en euros TTC. CoffeeBeans peut modifier ses tarifs à tout moment.</p>
                    <p><strong>5. Commande :</strong> Toute commande implique l'acceptation des présentes conditions. Nous nous réservons le droit de refuser une commande en cas de litige antérieur.</p>
                    <p><strong>6. Paiement :</strong> Le paiement est exigible à la commande par carte bancaire via une plateforme sécurisée.</p>
                    <p><strong>7. Livraison :</strong> Les produits sont livrés à l’adresse fournie. Les délais sont donnés à titre indicatif.</p>
                    <p><strong>8. Rétractation :</strong> Le client dispose de 14 jours pour exercer son droit de rétractation.</p>
                    <p><strong>9. Données personnelles :</strong> Les données sont utilisées uniquement pour le traitement des commandes, conformément au RGPD.</p>
                    <p><strong>10. Droit applicable :</strong> Les présentes conditions sont régies par la loi française. Un règlement amiable sera privilégié en cas de litige.</p>
                </article>
            </div>
        </>
    )
}

export default TermsOfSale
