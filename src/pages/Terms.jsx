const h1Style = "text-3xl font-bold text-black mb-6";
const h2Style = "text-2xl font-semibold text-neutral-800 mt-10 mb-4";
const pStyle = "text-base text-neutral-700 mb-4 leading-relaxed";
const ulStyle = "list-disc list-outside pl-5 mb-4 text-neutral-700 leading-relaxed";

const TermsContent = () => (
  <section id="termos">
    <h1 className={h1Style}>Política Geral</h1>
    <p className={pStyle}>Que alegria ter você aqui! A <strong>byCarolla</strong> nasceu do propósito de criar ferramentas de organização que sejam <strong>a sua cara</strong> e, de fato, <strong>funcionais</strong>. Nosso processo é feito com muito carinho, de forma artesanal e personalizada. Para que sua experiência seja a mais leve e produtiva possível, queremos ser <strong>100% transparentes sobre como funcionamos</strong>.</p>
    
    <h2 className={h2Style} id="termos-1">1. Processo de Personalização e "Aceite"</h2>
    <p className={pStyle}>Como criamos produtos exclusivos para você, nosso processo funciona em algumas etapas:</p>
    <ul className={ulStyle}>
      <li><strong>Briefing:</strong> primeiro, alinhamos com você todos os detalhes da personalização (cores, textos, estilos, entre outros);</li>
      <li><strong>Aprovação (O "Aceite"):</strong> enviamos uma prévia da arte para seu "Aceite" (aprovação). É fundamental que você confira todos os detalhes;</li>
      <li><strong>Pagamento:</strong> após a aprovação da arte, solicitamos o pagamento (sinal de 50% ou 100% integral) para iniciarmos a produção.</li>
    </ul>

    <h2 className={h2Style} id="termos-2">2. Cancelamento, Arrependimento e Reembolso</h2>
    
    <h3 className={h2Style + " text-xl"} id="termos-2-1">2.1. Janela de Arrependimento (24h)</h3>
    <p className={pStyle}>A partir da confirmação do seu pagamento (seja o sinal de 50% ou o valor total de 100%), você terá um prazo de <strong>24 horas para refletir se vai adquirir realmente o produto</strong>. Caso precise cancelar <strong>dentro desse período</strong>, o valor pago será <strong>100% reembolsado</strong>.</p>
    
    <h3 className={h2Style + " text-xl"} id="termos-2-2">2.2. Início da Produção (Ponto de Não Retorno)</h3>
    <p className={pStyle}>Se você <strong>não manifestar nenhum tipo de contestação sobre não querer mais o produto/serviço dentro dessas 24 horas</strong>, entenderemos que a produção está <strong>autorizada</strong> e seu pedido <strong>entrará oficialmente em nossa fila de feitura</strong>. A partir deste momento (após as 24h), caso o cancelamento seja solicitado, o valor referente ao sinal de 50% <strong>não será reembolsável</strong>.</p>
    <p className={pStyle}>Se você pagou 100% (Crédito ou PIX), <strong>a regra do sinal ainda se aplica</strong>. 50% do valor (referente ao sinal) será retido e os outros 50% serão reembolsados.</p>

    <h3 className={h2Style + " text-xl"} id="termos-2-3">2.3. Prazo para Reembolso</h3>
    <p className={pStyle}>Reembolsos aprovados (via PIX) serão feitos <strong>em até 2 dias úteis</strong>.</p>

    <h2 className={h2Style} id="termos-3">3. Avarias ou Danos (Produto com defeito)</h2>
    <p className={pStyle}>Se o seu produto chegar com qualquer avaria ou danificado, nos avise imediatamente com fotos/vídeos. Conforme nossa política, você poderá escolher:</p>
    <ul className={ulStyle}>
      <li>Receber um novo produto: Enviaremos um novo item (sujeito ao nosso prazo de produção).</li>
      <li>Reembolso de 50% do valor total: Já que o pagamento do sinal não é reembolsável.</li>
    </ul>

    <h2 className={h2Style} id="termos-4">4. Extravio (Pedido perdido)</h2>
    <p className={pStyle}>Caso a transportadora confirme oficialmente o extravio do seu pedido, aplicaremos a mesma regra de "Avarias ou Danos".</p>

    <h2 className={h2Style} id="termos-5">5. Formas de Pagamento</h2>
    <p className={pStyle}>Aceitamos diferentes formas de pagamento. Escolha a sua preferida!</p>
    <ul className={ulStyle}>
      <li>PIX (A forma mais rápida de confirmar seu pedido).</li>
      <li>Cartão de Crédito (via Link de Pagamento seguro).</li>
      <li>Dinheiro (Apenas para entregas locais).</li>
    </ul>
    <p className={pStyle}>Caso tenha alguma dúvida, basta entrar em contato através do whatsApp: (31) 9 7157-6238</p>
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