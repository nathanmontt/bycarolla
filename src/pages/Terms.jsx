const h1Style = "text-3xl font-bold text-black mb-6";
const h2Style = "text-2xl font-semibold text-neutral-800 mt-10 mb-4";
const pStyle = "text-base text-neutral-700 mb-4 leading-relaxed";
const ulStyle = "list-disc list-outside pl-5 mb-4 text-neutral-700 leading-relaxed";

const TermsContent = () => (
  <section id="termos">
    <h1 className={h1Style}>Política Geral - byCarolla</h1>
    [cite_start]<p className={pStyle}>Que alegria ter você aqui! [cite: 3] [cite_start]A byCarolla nasceu do propósito de criar ferramentas de organização que sejam "a sua cara" e de fato funcionais. [cite: 4] [cite_start]Nosso processo é feito com muito carinho, de forma artesanal e personalizada. [cite: 5] [cite_start]Para que sua experiência seja a mais leve e produtiva possível, queremos ser 100% transparentes sobre como funcionamos. [cite: 6]</p>
    
    <h2 className={h2Style} id="termos-1">1. Processo de Personalização e "Aceite"</h2>
    [cite_start]<p className={pStyle}>Como criamos produtos exclusivos para você, nosso processo funciona em algumas etapas: [cite: 9]</p>
    <ul className={ulStyle}>
      [cite_start]<li><strong>Briefing:</strong> Primeiro, alinhamos com você todos os detalhes da personalização (cores, textos, estilos). [cite: 10]</li>
      <li><strong>Aprovação (O "Aceite"):</strong> Nós enviamos uma prévia da arte para seu "Aceite" (aprovação). [cite_start]É fundamental que você confira todos os detalhes. [cite: 11, 12]</li>
      [cite_start]<li><strong>Pagamento:</strong> Após o "Aceite" da arte, solicitamos o pagamento (sinal de 50% ou 100% integral) para iniciarmos a produção. [cite: 13]</li>
    </ul>

    <h2 className={h2Style} id="termos-2">2. Cancelamento, Arrependimento e Reembolso</h2>
    [cite_start]<p className={pStyle}>Esta é a parte mais importante da nossa política, pois envolve produtos feitos sob medida. [cite: 15]</p>
    
    <h3 className={h2Style + " text-xl"} id="termos-2-1">2.1. Janela de Arrependimento (24h)</h3>
    [cite_start]<p className={pStyle}>A partir da confirmação do seu pagamento (seja o sinal de 50% ou o valor total de 100%), você terá um prazo de 24 horas para refletir. [cite: 16] [cite_start]Caso precise cancelar dentro desse período, o valor pago será 100% reembolsado, sem problemas. [cite: 17]</p>
    
    <h3 className={h2Style + " text-xl"} id="termos-2-2">2.2. Início da Produção (Ponto de Não Retorno)</h3>
    [cite_start]<p className={pStyle}>Se você não se manifestar nessas 24 horas, entenderemos que a produção está autorizada e seu pedido entrará oficialmente em nossa fila. [cite: 18] [cite_start]A partir deste momento (após as 24h), seu produto entra na fase de corte e montagem. [cite: 19] [cite_start]Caso o cancelamento seja solicitado, o valor referente ao sinal de 50% não será reembolsável. [cite: 20]</p>
    <p className={pStyle}>Se você pagou 100% (Cartão/PIX): A regra do sinal ainda se aplica. [cite_start]50% do valor (referente ao sinal) será retido e os outros 50% serão reembolsados. [cite: 21, 22]</p>

    <h3 className={h2Style + " text-xl"} id="termos-2-3">2.3. Prazo para Reembolso</h3>
    [cite_start]<p className={pStyle}>Reembolsos aprovados (via PIX ou transferência) serão feitos em até 2 dias úteis. [cite: 23]</p>

    <h2 className={h2Style} id="termos-3">3. Avarias ou Danos (Produto com defeito)</h2>
    [cite_start]<p className={pStyle}>Se o seu produto chegar com qualquer avaria ou danificado, nos avise imediatamente com fotos/vídeos. [cite: 32] [cite_start]Conforme nossa política, você poderá escolher: [cite: 33]</p>
    <ul className={ulStyle}>
      [cite_start]<li>Receber um novo produto: Enviaremos um novo item (sujeito ao nosso prazo de produção). [cite: 34]</li>
      [cite_start]<li>Reembolso de 50% do valor total: Já que o pagamento do sinal não é reembolsável. [cite: 35]</li>
    </ul>

    <h2 className={h2Style} id="termos-4">4. Extravio (Pedido perdido)</h2>
    [cite_start]<p className={pStyle}>Caso a transportadora confirme oficialmente o extravio do seu pedido, aplicaremos a mesma regra de "Avarias ou Danos". [cite: 36]</p>

    <h2 className={h2Style} id="termos-5">5. Formas de Pagamento</h2>
    [cite_start]<p className={pStyle}>Aceitamos diferentes formas de pagamento. [cite: 41] [cite_start]Escolha a sua preferida! [cite: 42]</p>
    <ul className={ulStyle}>
      [cite_start]<li>PIX (A forma mais rápida de confirmar seu pedido). [cite: 43]</li>
      [cite_start]<li>Cartão de Crédito (via Link de Pagamento seguro). [cite: 44]</li>
      [cite_start]<li>Dinheiro (Apenas para entregas locais). [cite: 45]</li>
    </ul>
    [cite_start]<p className={pStyle}>Caso tenha alguma dúvida, basta entrar em contato através do whatsApp: (31) 9 7157-6238 [cite: 47]</p>
  </section>
);

// Menu "Nesta Página" (TOC) para os Termos
const TermsTOC = ({ activeSubheadingId }) => (
  <ul className="space-y-2 pl-4 mt-2 text-sm">
    <li><a href="#termos-1" className={`cursor-pointer transition-colors ${activeSubheadingId === 'termos-1' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>1. Personalização</a></li>
    <li><a href="#termos-2" className={`cursor-pointer transition-colors ${activeSubheadingId === 'termos-2' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2. Cancelamento e Reembolso</a></li>
    <li><a href="#termos-2-1" className={`cursor-pointer transition-colors pl-2 ${activeSubheadingId === 'termos-2-1' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2.1. Janela de 24h</a></li>
    <li><a href="#termos-2-2" className={`cursor-pointer transition-colors pl-2 ${activeSubheadingId === 'termos-2-2' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2.2. Pós-Produção</a></li>
    <li><a href="#termos-2-3" className={`cursor-pointer transition-colors pl-2 ${activeSubheadingId === 'termos-2-3' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>2.3. Prazo Reembolso</a></li>
    <li><a href="#termos-3" className={`cursor-pointer transition-colors ${activeSubheadingId === 'termos-3' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>3. Avarias ou Danos</a></li>
    <li><a href="#termos-4" className={`cursor-pointer transition-colors ${activeSubheadingId === 'termos-4' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>4. Extravio</a></li>
    <li><a href="#termos-5" className={`cursor-pointer transition-colors ${activeSubheadingId === 'termos-5' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'}`}>5. Pagamento</a></li>
  </ul>
);

export { TermsContent, TermsTOC };