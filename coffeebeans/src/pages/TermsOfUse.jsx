import React from 'react'
import Title from '../components/Title'

const TermsOfUse = () => {
    return (
        <>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title titlePart1={'TERMS OF'} titlePart2={'USE / UTILISATION'} />
            </div>

            <div className='flex flex-col gap-16 my-10 px-6 md:px-24 text-gray-700 font-[Barlow]'>
                {/* ENGLISH VERSION */}
                <article className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold text-gray-900'>Terms and Conditions of Use — CoffeeBeans</h2>
                    <p><strong>1. Company Information:</strong><br />
                        Company name: CoffeeBeans SARL<br />
                        Address: 12 Rue des Arômes, 75000 Paris, France<br />
                        SIRET: 123 456 789 00010<br />
                        Email: info@coffeebeans.pro<br />
                        Phone: +33 1 23 45 67 89
                    </p>
                    <p><strong>2. Purpose:</strong> These Terms of Use define the conditions under which users may access and use the CoffeeBeans website and services.</p>
                    <p><strong>3. Access:</strong> The website is accessible to users with internet access. All costs related to access are the responsibility of the user.</p>
                    <p><strong>4. User Obligations:</strong> Users must not interfere with site operation, and must comply with laws and public order.</p>
                    <p><strong>5. Intellectual Property:</strong> All content on the site is the exclusive property of CoffeeBeans and is protected under copyright and intellectual property laws.</p>
                    <p><strong>6. Personal Data:</strong> CoffeeBeans processes user data in compliance with the GDPR. Users have the right to access, rectify, and delete their data.</p>
                    <p><strong>7. Liability:</strong> CoffeeBeans is not liable for direct or indirect damages resulting from the use of the site.</p>
                    <p><strong>8. Modifications:</strong> CoffeeBeans reserves the right to modify these terms at any time. Users will be notified of changes.</p>
                    <p><strong>9. Applicable Law:</strong> These terms are governed by French law. In case of dispute, amicable settlement will be preferred.</p>
                </article>

                <hr className='my-8 border-gray-400' />
                <h3 className='text-center text-gray-600 italic'>Version française</h3>

                {/* FRANÇAIS VERSION */}
                <article className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold text-gray-900'>Conditions Générales d'Utilisation — CoffeeBeans</h2>
                    <p><strong>1. Informations sur la société :</strong><br />
                        Nom de l'entreprise : CoffeeBeans SARL<br />
                        Adresse : 12 Rue des Arômes, 75000 Paris, France<br />
                        SIRET : 123 456 789 00010<br />
                        Email : info@coffeebeans.pro<br />
                        Téléphone : +33 1 23 45 67 89
                    </p>
                    <p><strong>2. Objet :</strong> Les présentes CGU définissent les conditions d’accès et d’utilisation du site et des services de CoffeeBeans.</p>
                    <p><strong>3. Accès :</strong> Le site est accessible à tout utilisateur disposant d’un accès internet. Tous les frais sont à la charge de l’utilisateur.</p>
                    <p><strong>4. Obligations des utilisateurs :</strong> Les utilisateurs doivent respecter la législation en vigueur et ne pas perturber le bon fonctionnement du site.</p>
                    <p><strong>5. Propriété intellectuelle :</strong> Tous les contenus du site sont la propriété exclusive de CoffeeBeans et sont protégés par les lois sur le droit d’auteur et la propriété intellectuelle.</p>
                    <p><strong>6. Données personnelles :</strong> CoffeeBeans traite les données personnelles des utilisateurs conformément au RGPD. Les utilisateurs disposent de droits d’accès, de rectification et de suppression de leurs données.</p>
                    <p><strong>7. Responsabilité :</strong> CoffeeBeans décline toute responsabilité en cas de dommages directs ou indirects résultant de l’utilisation du site.</p>
                    <p><strong>8. Modifications :</strong> CoffeeBeans se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs seront informés de toute mise à jour.</p>
                    <p><strong>9. Droit applicable :</strong> Les présentes conditions sont régies par le droit français. En cas de litige, un règlement amiable sera privilégié.</p>
                </article>
            </div>
        </>
    )
}

export default TermsOfUse
