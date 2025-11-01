const h1Style = "text-3xl font-bold text-black mb-6";
const h2Style = "text-2xl font-semibold text-neutral-800 mt-10 mb-4";
const pStyle = "text-base text-neutral-700 mb-4 leading-relaxed";
// const ulStyle = "list-disc list-outside pl-5 mb-4 text-neutral-700 leading-relaxed";

const ShippingContent = () => (
  <section id="envios">
    <h1 className={h1Style}>Prazos de Produção e Envio</h1>
    
    <h2 className={h2Style} id="envios-1">1. Prazo de Produção (Personalizados)</h2>
    [cite_start]<p className={pStyle}>O prazo de produção é de 7 a 10 dias úteis. [cite: 25] [cite_start]Este prazo é contado após o término da "Janela de Arrependimento" de 24h (que se inicia após a confirmação do pagamento do sinal). [cite: 107, 25]</p>
    
    <h2 className={h2Style} id="envios-2">2. Prazo de Separação (Pronta Entrega)</h2>
    [cite_start]<p className={pStyle}>Para itens a pronta entrega (como nossos calendários), o prazo de separação e entrega é de 24h após a confirmação do pagamento. [cite: 27] [cite_start](Nota: O PDF interno cita 3-5 dias [cite: 110][cite_start], mas a política geral cita 24h[cite: 27]. Usamos a de 24h por ser voltada ao cliente.)</p>
    
    <h2 className={h2Style} id="envios-3">3. Prazo Final de Entrega</h2>
    [cite_start]<p className={pStyle}>O prazo total informado ao cliente é sempre a soma do (Prazo de Produção/Separação) + (Prazo da Transportadora). [cite: 112, 113] [cite_start]Exemplo: 7 dias úteis de produção + 5 dias úteis do Correios = 12 dias úteis de prazo total. [cite: 114]</p>
    
    <h2 className={h2Style} id="envios-4">4. Endereço Incorreto</h2>
    [cite_start]<p className={pStyle}>O preenchimento correto do endereço de entrega é de total responsabilidade do cliente. [cite: 29, 119] [cite_start]Caso o pedido retorne para nós por "Endereço Incorreto" ou "Destinatário Ausente", um novo frete será cobrado para o reenvio. [cite: 30, 120]</p>
    
    <h2 className={h2Style} id="envios-5">5. Atrasos da Transportadora</h2>
    [cite_start]<p className={pStyle}>Nós nos responsabilizamos por abrir chamados (PI) e monitorar a entrega junto à transportadora, mas não temos controle sobre eventuais atrasos. [cite: 31, 122, 123] [cite_start]Manteremos você informado sobre o status do chamado. [cite: 124]</p>
    
    <h2 className={h2Style} id="envios-6">6. Rastreio</h2>
    [cite_start]<p className={pStyle}>O código de rastreio será enviado ao seu e-mail (e/ou DM) no mesmo dia em que o pedido for postado. [cite: 116]</p>
  </section>
);

// Menu "Nesta Página" (TOC) para Envios
const ShippingTOC = ({ activeSubheadingId }) => (
  <ul className="space-y-2 pl-4 mt-2 text-sm">
    <li><a href="#envios-1" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-1' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>1. Produção (Personalizados)</a></li>
    <li><a href="#envios-2" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-2' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2. Separação (Pronta Entrega)</a></li>
    <li><a href="#envios-3" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-3' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>3. Prazo Final</a></li>
    <li><a href="#envios-4" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-4' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>4. Endereço Incorreto</a></li>
    <li><a href="#envios-5" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-5' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>5. Atrasos</a></li>
    <li><a href="#envios-6" className={`cursor-pointer transition-colors ${activeSubheadingId === 'envios-6' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>6. Rastreio</a></li>
  </ul>
);

export { ShippingContent, ShippingTOC };