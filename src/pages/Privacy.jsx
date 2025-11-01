const h1Style = "text-3xl font-bold text-black mb-6";
const h2Style = "text-2xl font-semibold text-neutral-800 mt-10 mb-4";
const pStyle = "text-base text-neutral-700 mb-4 leading-relaxed";
const ulStyle = "list-disc list-outside pl-5 mb-4 text-neutral-700 leading-relaxed";

const PrivacyContent = () => (
  <section id="privacidade">
    <h1 className={h1Style}>Privacidade e Segurança</h1>
    [cite_start]<p className={pStyle}>Feito com amor e com respeito! Seus dados (nome, endereço, e-mail) estão seguros conosco. [cite: 38] [cite_start]Eles são usados apenas para o processamento, envio e comunicação sobre o seu pedido. [cite: 39] [cite_start]Jamais compartilharemos suas informações. [cite: 39]</p>
    
    <h2 className={h2Style} id="priv-1">1. Quais dados coletamos?</h2>
    <p className={pStyle}>Coletamos os dados que você fornece durante a compra: nome completo, CPF, endereço de entrega, e-mail e número de telefone. Não armazenamos dados do seu cartão de crédito.</p>
    
    <h2 className={h2Style} id="priv-2">2. Como usamos seus dados?</h2>
    [cite_start]<p className={pStyle}>Seus dados são usados exclusivamente para: [cite: 39]</p>
    <ul className={ulStyle}>
      <li>Processar e faturar seu pedido.</li>
      <li>Realizar o envio e a entrega no seu endereço.</li>
      <li>Comunicar-se com você sobre o status do seu pedido.</li>
      <li>Cumprir obrigações legais e fiscais.</li>
    </ul>
    
    <h2 className={h2Style} id="priv-3">3. Com quem compartilhamos?</h2>
    [cite_start]<p className={pStyle}>Jamais compartilharemos, venderemos ou alugaremos seus dados. [cite: 39] O compartilhamento é feito apenas com empresas essenciais para a sua compra (ex: a transportadora que precisa do seu endereço, ou a plataforma de pagamento para processar o cartão).</p>
    
    <h2 className={h2Style} id="priv-4">4. Cookies</h2>
    <p className={pStyle}>Nosso site pode usar cookies para salvar itens no seu carrinho de compras e analisar o tráfego de forma anônima, para que possamos melhorar sua experiência.</p>
  </section>
);

const PrivacyTOC = ({ activeSubheadingId }) => (
  <ul className="space-y-2 pl-4 mt-2 text-sm">
    <li><a href="#priv-1" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-1' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>1. Coleta de Dados</a></li>
    <li><a href="#priv-2" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-2' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2. Uso dos Dados</a></li>
    <li><a href="#priv-3" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-3' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>3. Compartilhamento</a></li>
    <li><a href="#priv-4" className={`cursor-pointer transition-colors ${activeSubheadingId === 'priv-4' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>4. Cookies</a></li>
  </ul>
);

export { PrivacyContent, PrivacyTOC };