// ==========================================================================
// Typeoff V2 - Lógica da Aplicação, Navegação, Syntax Highlighting & Quiz
// ==========================================================================

// Dados do Conteúdo das Unidades
const unidadesData = {
  1: {
    titulo: "Unidade 1: Conceito e Atribuição de Variáveis",
    descricao: "Aprenda como declaração e atribuição de valores diferem entre linguagens dinâmicas e estaticamente tipadas.",
    codigos: {
      python: `<span class="syn-cm"># Em Python a tipagem é dinâmica e inferida</span>
<span class="syn-diff"><span class="syn-kw">idade</span> = <span class="syn-num">22</span></span>
<span class="syn-diff"><span class="syn-kw">nome</span> = <span class="syn-str">"Emanuele"</span></span>
<span class="syn-fn">print</span>(f<span class="syn-str">"Olá {nome}, você tem {idade} anos."</span>)`,

      java: `<span class="syn-cm">// Em Java a tipagem é estática e obrigatória</span>
<span class="syn-kw">public class</span> <span class="syn-fn">Main</span> {
    <span class="syn-kw">public static void</span> <span class="syn-fn">main</span>(String[] args) {
        <span class="syn-diff"><span class="syn-kw">int</span> idade = <span class="syn-num">22</span>;</span>
        <span class="syn-diff">String nome = <span class="syn-str">"Emanuele"</span>;</span>
        System.out.println(<span class="syn-str">"Olá "</span> + nome + <span class="syn-str">", você tem "</span> + idade + <span class="syn-str">" anos."</span>);
    }
}`,

      c: `<span class="syn-cm">// Em C é necessário declarar tipos e gerenciar a saída formatada</span>
<span class="syn-kw">#include</span> <span class="syn-str">&lt;stdio.h&gt;</span>

<span class="syn-kw">int</span> <span class="syn-fn">main</span>() {
    <span class="syn-diff"><span class="syn-kw">int</span> idade = <span class="syn-num">22</span>;</span>
    <span class="syn-diff"><span class="syn-kw">char</span> nome[] = <span class="syn-str">"Emanuele"</span>;</span>
    <span class="syn-fn">printf</span>(<span class="syn-str">"Olá %s, você tem %d anos.\n"</span>, nome, idade);
    <span class="syn-kw">return</span> <span class="syn-num">0</span>;
}`
    },
    observacoes: [
      "<b>Python:</b> Não exige especificação de tipo (ex: <code>int</code> ou <code>char</code>). O interpretador infere o tipo automaticamente.",
      "<b>Java:</b> Exige o tipo da variável (<code>int</code>, <code>String</code>) antes do nome e exige ponto e vírgula <code>;</code> no final.",
      "<b>C:</b> Exige declaração explícita de tipos e no <code>printf</code> necessita de especificadores de formato como <code>%s</code> para texto e <code>%d</code> para inteiros."
    ],
    quiz: {
      pergunta: "Qual das linguagens apresentadas abaixo exige o uso de especificadores de formato (%s, %d) para exibir variáveis no terminal?",
      opcoes: ["Python", "Java", "C", "Nenhuma das alternativas"],
      correta: 2,
      explicacao: "Exato! Em C, a função printf() exige os especificadores de formato como %s para strings e %d para inteiros."
    }
  },

  2: {
    titulo: "Unidade 2: Estruturas Condicionais (if/else)",
    descricao: "Compare a estrutura de tomada de decisão entre a indentação do Python e as chaves {} do Java e C.",
    codigos: {
      python: `<span class="syn-cm"># Python usa indentação e 'elif'</span>
<span class="syn-kw">nota</span> = <span class="syn-num">85</span>

<span class="syn-diff"><span class="syn-kw">if</span> nota >= <span class="syn-num">80</span>:</span>
    <span class="syn-fn">print</span>(<span class="syn-str">"Aprovado com Sucesso!"</span>)
<span class="syn-diff"><span class="syn-kw">elif</span> nota >= <span class="syn-num">60</span>:</span>
    <span class="syn-fn">print</span>(<span class="syn-str">"Em Recuperação"</span>)
<span class="syn-kw">else</span>:
    <span class="syn-fn">print</span>(<span class="syn-str">"Reprovado"</span>)`,

      java: `<span class="syn-cm">// Java usa parênteses () e chaves {}</span>
<span class="syn-kw">int</span> nota = <span class="syn-num">85</span>;

<span class="syn-diff"><span class="syn-kw">if</span> (nota >= <span class="syn-num">80</span>) {</span>
    System.out.println(<span class="syn-str">"Aprovado com Sucesso!"</span>);
<span class="syn-diff">} <span class="syn-kw">else if</span> (nota >= <span class="syn-num">60</span>) {</span>
    System.out.println(<span class="syn-str">"Em Recuperação"</span>);
} <span class="syn-kw">else</span> {
    System.out.println(<span class="syn-str">"Reprovado"</span>);
}`,

      c: `<span class="syn-cm">// C possui estrutura idêntica ao Java para condicionais básicas</span>
<span class="syn-kw">int</span> nota = <span class="syn-num">85</span>;

<span class="syn-diff"><span class="syn-kw">if</span> (nota >= <span class="syn-num">80</span>) {</span>
    <span class="syn-fn">printf</span>(<span class="syn-str">"Aprovado com Sucesso!\n"</span>);
<span class="syn-diff">} <span class="syn-kw">else if</span> (nota >= <span class="syn-num">60</span>) {</span>
    <span class="syn-fn">printf</span>(<span class="syn-str">"Em Recuperação\n"</span>);
} <span class="syn-kw">else</span> {
    <span class="syn-fn">printf</span>(<span class="syn-str">"Reprovado\n"</span>);
}`
    },
    observacoes: [
      "<b>Python:</b> Usa <code>elif</code> para condições intermediárias e bloco delimitado por **indentação (espaços)**.",
      "<b>Java e C:</b> Usam <code>else if</code> e blocos delimitados por chaves <code>{}</code> com expressões entre parênteses <code>()</code>."
    ],
    quiz: {
      pergunta: "Em Python, o que delimita um bloco de código dentro de um comando 'if'?",
      opcoes: ["Chaves {}", "Parênteses ()", "Indentação (espaçamento)", "O caractere ;"],
      correta: 2,
      explicacao: "Correto! Python utiliza a indentação rigorosa para definir a hierarquia e blocos de código."
    }
  }
};

// Estado Atual da Aplicação
let unidadeAtual = 1;
let linguagemAtual = 'python';

// Inicialização da Página
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderUnidade(1);
});

// Alternar Tema Claro / Escuro
function initTheme() {
  const btnTheme = document.getElementById('btn-theme');
  const themeText = document.getElementById('theme-text');
  
  btnTheme.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.body.removeAttribute('data-theme');
      themeText.textContent = 'Modo Escuro';
    } else {
      document.body.setAttribute('data-theme', 'dark');
      themeText.textContent = 'Modo Claro';
    }
  });
}

// Renderizar Conteúdo da Unidade Selecionada
function renderUnidade(id) {
  unidadeAtual = id;
  const data = unidadesData[id];
  if (!data) return;

  // Atualizar botões das unidades
  document.querySelectorAll('.unit-tab').forEach((tab, index) => {
    if (index + 1 === id) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Atualizar Título e Descrição
  document.getElementById('unit-title').textContent = data.titulo;
  document.getElementById('unit-desc').textContent = data.descricao;

  // Renderizar Código da Linguagem Selecionada
  renderCodigo(linguagemAtual);

  // Renderizar Observações (D2 - Lado a Lado)
  const obsContainer = document.getElementById('observation-list');
  obsContainer.innerHTML = '';
  data.observacoes.forEach(obs => {
    const li = document.createElement('li');
    li.innerHTML = obs;
    obsContainer.appendChild(li);
  });

  // Renderizar Quiz
  renderQuiz(data.quiz);
}

// Alternar Linguagem (Python, Java, C)
function setLinguagem(lang) {
  linguagemAtual = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderCodigo(lang);
}

function renderCodigo(lang) {
  const data = unidadesData[unidadeAtual];
  const codeBox = document.getElementById('code-display');
  codeBox.innerHTML = data.codigos[lang] || '';
}

// Renderizar Quiz Interativo
function renderQuiz(quiz) {
  const questionTitle = document.getElementById('quiz-question');
  const optionsGroup = document.getElementById('quiz-options');
  const feedbackMsg = document.getElementById('quiz-feedback');

  questionTitle.textContent = quiz.pergunta;
  optionsGroup.innerHTML = '';
  feedbackMsg.className = 'feedback-msg';
  feedbackMsg.textContent = '';

  quiz.opcoes.forEach((opcao, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + index)}) ${opcao}`;
    btn.onclick = () => checarResposta(index, quiz.correta, quiz.explicacao, btn);
    optionsGroup.appendChild(btn);
  });
}

// Validar Resposta do Quiz
function checarResposta(indexSelecionado, indexCorreto, explicacao, btnClicado) {
  const feedbackMsg = document.getElementById('quiz-feedback');
  const allOptions = document.querySelectorAll('.option-btn');
  
  allOptions.forEach(b => b.disabled = true);

  if (indexSelecionado === indexCorreto) {
    btnClicado.classList.add('correct');
    feedbackMsg.className = 'feedback-msg success show';
    feedbackMsg.innerHTML = `<strong>✨ Resposta Correta!</strong> ${explicacao}`;
  } else {
    btnClicado.classList.add('wrong');
    allOptions[indexCorreto].classList.add('correct');
    feedbackMsg.className = 'feedback-msg error show';
    feedbackMsg.innerHTML = `<strong>❌ Resposta Incorreta.</strong> A alternativa correta era a ${String.fromCharCode(65 + indexCorreto)}. ${explicacao}`;
  }
}
