const h1Style = "text-3xl font-bold text-black";
const update = "text-sm font-thin text-black mb-6";
const h2Style = "text-2xl font-semibold text-neutral-800 mt-10 mb-4";
const pStyle = "text-base text-neutral-700 mb-4 leading-relaxed";
// const ulStyle = "list-disc list-outside pl-5 mb-4 text-neutral-700 leading-relaxed";

const ShippingContent = () => (
  <section id="envios">
    <h1 className={h1Style}>Prazos de Produção e Envio</h1>
    <p className={update}>Última atualização: 1 de Novembro de 2025, às 14:00 horas</p>
    
    <h2 className={h2Style} id="envios-1">1. Prazo de Produção (Personalizados)</h2>
    <p className={pStyle}>O prazo de produção é de <strong>7 a 10 dias úteis</strong>. Este prazo é contado após o término da <strong>Janela de Arrependimento de 24h</strong> que se inicia após a confirmação do pagamento do sinal.</p>
    
    <h2 className={h2Style} id="envios-2">2. Prazo de Separação (Pronta Entrega)</h2>
    <p className={pStyle}>Para itens a pronta entrega, o prazo de separação e entrega é de <strong>24h após a confirmação do pagamento</strong>. Salientamos que: <strong>produtos de pronta entrega não estão sujeitos a personalização!</strong></p>
    
    <h2 className={h2Style} id="envios-3">3. Prazo Final de Retirada</h2>
    <p className={pStyle}>A data de retirada <strong>é sempre acordado com o cliente no momento em que o produto antes do início produção</strong>. Caso haja imprevistos, <strong>o cliente será comunicado com antecedência (até 24 horas)</strong>;</p>
  </section>
);

// Menu "Nesta Página" (TOC) para Envios
const ShippingTOC = ({ activeSubheadingId }) => (
  <ul className="space-y-2 pl-4 mt-2 text-sm">
    <li><a href="#envios-1" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-1' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>1. Produção (Personalizados)</a></li>
    <li><a href="#envios-2" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-2' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2. Separação (Pronta Entrega)</a></li>
    <li><a href="#envios-3" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-3' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>3. Prazo Final</a></li>
  </ul>
);

export { ShippingContent, ShippingTOC };