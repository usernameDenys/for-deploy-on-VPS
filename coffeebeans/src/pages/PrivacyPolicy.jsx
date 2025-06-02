import React from 'react';
import Title from '../components/Title';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="text-2xl text-center pt-8 border-t">
                <Title titlePart1={'PRIVACY'} titlePart2={'POLICY'} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16 my-10">
                <article className="flex flex-col justify-center gap-6 px-6 md:px-40 text-gray-600 font-[Barlow]">
                    {/* English Version */}
                    <h2 className="text-gray-800 font-bold font-[Fraunces]">Privacy Policy</h2>
                    <p>
                        At CoffeeBeans SARL, we value your privacy. This privacy policy outlines how we collect,
                        use, and protect your personal data in accordance with the General Data Protection Regulation (GDPR).
                    </p>
                    <p>
                        We collect data you provide during account creation, order processing, and newsletter
                        subscription. This includes your name, email address, shipping address, and payment information.
                    </p>
                    <p>
                        Your data is used strictly to process orders, improve our service, and send promotional
                        offers if you opt in. We do not sell your data.
                    </p>
                    <p>
                        You have the right to access, correct, or delete your personal data. To exercise these
                        rights, please contact us at contact@coffeebeans.fr.
                    </p>
                    <p>
                        Data is stored securely and access is restricted to authorized personnel only.
                    </p>

                    <h3 className="text-gray-800 font-bold font-[Fraunces] mt-10">Company Information</h3>
                    <p>
                        CoffeeBeans SARL<br />
                        12 Rue des Arômes, 75000 Paris, France<br />
                        SIRET: 123 456 789 00010<br />
                        Email: info@coffeebeans.pro<br />
                        Phone: +33 1 23 45 67 89
                    </p>

                    {/* French Version */}
                    <h2 className="text-gray-800 font-bold font-[Fraunces] mt-20">Politique de confidentialité (Version française)</h2>
                    <p>
                        Chez CoffeeBeans SARL, nous attachons une grande importance à votre vie privée. Cette politique
                        de confidentialité décrit comment nous recueillons, utilisons et protégeons vos données
                        personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                    </p>
                    <p>
                        Nous collectons les données que vous fournissez lors de la création de compte, le traitement
                        des commandes, et l'inscription à notre newsletter. Cela inclut votre nom, votre adresse e-mail,
                        votre adresse de livraison et vos informations de paiement.
                    </p>
                    <p>
                        Vos données sont utilisées uniquement pour traiter les commandes, améliorer notre service
                        et envoyer des offres promotionnelles si vous y avez consenti. Nous ne vendons pas vos données.
                    </p>
                    <p>
                        Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles. Pour
                        exercer ces droits, veuillez nous contacter à contact@coffeebeans.fr.
                    </p>
                    <p>
                        Les données sont stockées en toute sécurité et l'accès est limité au personnel autorisé uniquement.
                    </p>

                    <h3 className="text-gray-800 font-bold font-[Fraunces] mt-10">Informations sur la société</h3>
                    <p>
                        CoffeeBeans SARL<br />
                        12 Rue des Arômes, 75000 Paris, France<br />
                        SIRET : 123 456 789 00010<br />
                        Email : info@coffeebeans.pro<br />
                        Téléphone : +33 1 23 45 67 89
                    </p>
                </article>
            </div>
        </>
    );
};

export default PrivacyPolicy;
