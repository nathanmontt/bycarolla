const h1Style = "text-3xl font-bold text-[#DA5162]";
const secUpdate = "text-sm font-thin mt-2 mb-6 text-[#DA5162]";
const h2Style = "text-2xl font-semibold text-[#DA5162] mt-10 mb-4";
const pStyle = "text-base text-[#DA5162] mb-3 leading-relaxed";
const ulStyle = "list-disc list-outside pl-5 mb-4 text-[#DA5162] leading-relaxed";

const PrivacyContent = () => (
  <section id="privacidade">
    <h1 className={h1Style}>Privacidade e Segurança</h1>
    <p className={secUpdate}>Seus dados estão seguros. Eles são usados apenas para o processamento, envio e comunicação sobre o seu pedido. <strong>Jamais compartilharemos suas informações</strong>.</p>
    
    <h2 className={h2Style} id="priv-1">1. Quais dados coletamos?</h2>
    <p className={pStyle}>Coletamos os dados que você fornece durante a compra: nome completo, instagram e número de telefone. <strong>Não armazenamos dados do seu cartão de crédito</strong>.</p>
    
    <h2 className={h2Style} id="priv-2">2. Como usamos seus dados?</h2>
    <p className={pStyle}>Seus dados são usados exclusivamente para:</p>
    <ul className={ulStyle}>
      <li>Processar e faturar seu pedido;</li>
      <li>Comunicar-se com você sobre o status do seu pedido;</li>
      <li>Cumprir obrigações legais e fiscais.</li>
    </ul>
    
    <h2 className={h2Style} id="priv-3">3. Com quem compartilhamos?</h2>
    <p className={pStyle}><strong>Jamais compartilharemos, venderemos ou alugaremos seus dados</strong>. O compartilhamento é feito apenas com empresas essenciais para a sua compra (ex: a plataforma de pagamento para processar o cartão).</p>
  </section>
);

const PrivacyTOC = ({ activeSubheadingId }) => (
  <ul className="space-y-2 pl-4 mt-2 text-sm">
    <li><a href="#priv-1" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-1' ? 'font-bold text-[#DA5162]' : 'text-[#d86e7b] hover:text-[#DA5162]'}`}>1. Coleta de Dados</a></li>
    <li><a href="#priv-2" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-2' ? 'font-bold text-[#DA5162]' : 'text-[#d86e7b] hover:text-[#DA5162]'}`}>2. Uso dos Dados</a></li>
    <li><a href="#priv-3" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-3' ? 'font-bold text-[#DA5162]' : 'text-[#d86e7b] hover:text-[#DA5162]'}`}>3. Compartilhamento</a></li>
  </ul>
);

export { PrivacyContent, PrivacyTOC };