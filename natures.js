


  const T1 = {
    name: "Inflexível",
    effectName: "Firme",
    statBuff: "1X Def",
    characteristic: "Perfeição, ordenado, disciplinado",    
    badCharacteristic: ", raivoso, rígido, medo de falhar.",
    battleBuff: "Não recebe nenhum dano", 
    battleDebuff: "Por sua teimosia, recebe 50% + dano de golpes super efetivos",
    affBuff: "Cumpre tarefas com perfeição, 1X por sessão",
    affDebuff: "pode ser teimoso, querendo fazer as coisas a sua maneira, atrapalhando planejamentos e estratégias"
  };
  const T2 = {
    name: "Dócil",
    effectName: "Gentil",
    statBuff: "1X Sp. Def",
    characteristic: "acolhedor comunicativo, carismático",   
    badCharacteristic: ", carente não consegue dizer não, medo de não ser amado.",
    battleBuff: "buffs dobram de eficiência e afetam aliados.", 
    battleDebuff: "pode se recusar a atacar o adversário.",
    affBuff: "pode potencializar (50%) intervenções curativas em pessoas e pokémon.",
    affDebuff: "Pode se tornar carente com o treinador, atrapalhando planejamentos e estratégias."
  };
  const T3 = {
    name: "Alegre",
    effectName: "Agitado",
    statBuff: "1X Speed",
    characteristic: "otimista, desenrolado, adaptativo", 
    badCharacteristic: ", egocêntrico, paixão pela imagem, medo de fracassar.",
    battleBuff: "Cada hit sua confiança aumenta, aumentadno 1X Speed a cada golpe consecutivo que atinge o adversário(reseta ao falhar)", 
    battleDebuff: "pode subestimar o oponente e baixar a guarda para o adversário, baixando usas defesas para metade (inclui esquivas e defesa natural).",
    affBuff: "Pode usar a confianã para chamar atenção e distrair inimigos.",
    affDebuff: "Pode querer se provar para os outros, se expondo a riscos e atrapalhando planos."
  };
  const T4 = {
    name: "Corajoso",
    effectName: "Ingênuo",
    statBuff: "15% Hit",
    characteristic: "Sensivel, idealista, original", 
    badCharacteristic: ", depressivo, abraça a dor, medo de não ser importante.",
    battleBuff: "debuffs se tornam buffs quando estiver com status negativo.", 
    battleDebuff: "Recebe dano desproporcional, tomando golpes críticos 50% mais facil.",
    affBuff: "Pode rastrear pokemon e itens para o pokemon.",
    affDebuff: "pode se expor a riscos desnecessários, desobedencedo o treinador."
  };
  const T5 = {
    name: "Solitário",
    effectName: "Sério",
    statBuff: "10% Crit",
    characteristic: "Analítico, planejador, focado",  
    badCharacteristic: ", isolado, não demonstra sentimentos, medo de ser incompetente.",
    battleBuff: "Danos super-efetivos causam 3x + de dano e não muito efetivos causam dano comum.", 
    battleDebuff: "Segue suas próprias estratégias, ignorando as ordens do treinador.",
    affBuff: "Pode cumprir funções sem os comandos do treinador.",
    affDebuff: "Pode se isolar, evitando trabalho em equipe (menos afetividade entre eles)."
  };
  const T6 = {
    name: "Cuidadoso",
    effectName: "Tímido",
    statBuff: "1X Sp. Atk",
    characteristic: "Questionador, comprometido, intuitivo",  
    badCharacteristic: ", inseguro, ansioso, medo de ser incapaz.",
    battleBuff: "Efeitos secundários de seus moves dobram de eficiência.", 
    battleDebuff: "Pode travar de medo, não atacando e não defendendo.",
    affBuff: "Pode pressentir o perigo e o caos.",
    affDebuff: "Pode travar de medo em situações perigosas."
  };
  const T7 = {
    name: "Atrevido",
    effectName: "Travesso",
    statBuff: "15% DDG",
    characteristic: "Visionário, Criativo, Improvisador",
    badCharacteristic: ", odeia regras, odeia limites, medo da dor.",
    battleBuff: "Provoca o adversário, cada move do oponente que não atinge diminui o hit em 15%(reseta ao acertar).", 
    battleDebuff: "Se assusta com o adversário, diminuindo DDG 15% a cada acerto sofrido.",
    affBuff: "Causa o dobro de dano em ataques furtivos.",
    affDebuff: "Pode fugir da luta deixando o treinador na mão, caso sinta que vai se prejudicar."
  };
  const T8 = {
    name: "Valente",
    effectName: "Impulsivo",
    statBuff: "1X Attack",
    characteristic: "Protetor, proativo, determinado", 
    badCharacteristic: ", agressor, autoritário, medo da traição.",
    battleBuff: "Causa o dobro de dano durante um ataque, triplo se for um acerto crítico.", 
    battleDebuff: "Pode desobedecer e atacar da maneira que desejar.",
    affBuff: "Pode intimidar pessoas.",
    affDebuff: "pode enfrentar o treinador."
  };
  const T9 = {
    name: "Tranquilo",
    effectName: "Preguiçoso",
    statBuff: "1X HP",
    characteristic: "Altruísta, Diplomático, Paciente",
    badCharacteristic: ", Preguiçoso, Indolente, Medo do abandono.",
    battleBuff: "Garante um acerto crítico, sendo ataque ou defesa.", 
    battleDebuff: "Pode dormir do nada.",
    affBuff: "Pode apaziguar batalhas.",
    affDebuff: "Demora 2x mais pra executar ações por conta de sua preguiça."
  };
window.natures = [T1,T2, T3, T4, T5, T6, T7, T8, T9];
