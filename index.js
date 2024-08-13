let progresso = 0;
let inventario = [];
let checkpoint = 0;

// Função para salvar o checkpoint
function salvarCheckpoint() {
    checkpoint = progresso;

    console.log(`Checkpoint salvo! Ponto de progresso atual: ${checkpoint}`);
}

// Função para carregar o checkpoint
function carregarCheckpoint() {
    progresso = checkpoint;

    console.log(`Checkpoint carregado! Progresso restaurado para: ${progresso}`);
}

function intro() {
    let resposta = prompt(
        `⭢Bem-vindo ao Destino em Fuga! A incrível jornada de Dorsa Yavarivafa te aguarda e é você quem vai decidir se Dorsa realizará seu sonho ou acabará frustrada.\n⭢Digite '1' para ajudar nossa atleta a chegar ao Time Olímpico ou digite '2' para jogar em outro momento.`
    );

    if (resposta == 1) {
        alert(
            `💡Relembrando que desenvolver Espírito Esportivo, Determinação e Disciplina é fundamental para a realização do sonho olímpico💡`
        );

        inicio();
    } else if (resposta == 2) {
        alert(`Que pena! Te aguardo em outro momento. Até mais!👋`);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        intro();
    }
}

function inicio() {
    let resposta = prompt(
        `Dorsa faz parte de uma família que valoriza muito a cultura esportiva. Seus pais perguntaram à menina se deseja experimentar um novo esporte: Badminton. Você deseja fazer uma aula experimental (digite 'SIM') ou não tem interesse (digite 'NAO').`
    );

    if (resposta === "SIM") {
        progresso += 1;

        salvarCheckpoint();

        alert(
            `Uhuulll! Isso é ótimo! Dorsa fez a aula experimental e amou, além disso, demonstrou ter um talento notável no Badminton. Com essa quietaOUconta, você acabou de ganhar +1 ponto de progresso, o que te leva mais perto de realizar o seu sonho.\nVocê, atualmente, tem ${progresso} pontos de progresso.`
        );

        resposta = prompt(
            `Uma nova etapa da jornada se inicia, Dorsa foi convidada para fazer parte da equipe de competição no clube o qual treina. Isso envolve treinar mais horas por dia e mais dias por semana🕙, você acha que vale a pena? Se sim ('SIM'), senão, ('NAO').`
        );

        conviteEquipeCompeticao(resposta);
    } else if (resposta === "NAO") {
        jogadorPerdeu();
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        inicio();
    }
}

function conviteEquipeCompeticao(resposta) {
    if (resposta === "SIM") {
        progresso += 1;

        salvarCheckpoint();

        alert(
            "Bem-vindo à equipe! 🎉 Estão muito felizes em ter Dorsa com a equipe para essa jornada no badminton. Aqui, todos são apaixonados pelo esporte e estão sempre prontos para ajudar uns aos outros a crescer e melhorar. Dorsa sabe que pode contar com eles para o que precisar, seja para treinar, trocar ideias ou até para aqueles momentos de descontração. Vamos com tudo! 💪🏸"
        );

        alert(
            `Com essa quietaOUconta, você ajudou Dorsa a se aproximar do Time Olímpico, por isso, ganhou +1 ponto de progresso totalizando, ${progresso} pontos.`
        );

        let resposta = prompt(
            `No seu primeiro dia na equipe de competição, uma das colegas de time de Dorsa a convida para uma festa. De todas as meninas da equipe, ela é a que tem um pior desempenho nas quadras, tendo uma fama ruim por parte dos treinadores. Ao mesmo tempo, a capitã da equipe convida Dorsa para fazer um treino de preparação física com ela no mesmo horário da festa. Qual programa você prefere para ter na sua sexta a noite? Festa('F') ou treinamento?('T')`
        );

        treinoEquipe(resposta);
    } else if (resposta === "NAO") {
        progresso -= 1;

        salvarCheckpoint();

        alert(
            `Tudo bem, as vezes iniciar na vida de atleta competitivo é uma quietaOUconta complicada. Vamos esperar mais um pouco. Você acaba de perder 1 ponto na jornada olímpica, agora você possui ${progresso} pontos.`
        );

        let resposta = prompt(
            `Apesar de não entrar na equipe, Dorsa ainda possui o sonho olímpico. Para isso, você acredita que ela deva manter os treinos intensivos ('INTENSO') ou jogar apenas por hobbie ('HOBBIE')?`
        );

        rotinaTreinos(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        conviteEquipeCompeticao(resposta);
    }
}

function rotinaTreinos(resposta) {
    if (resposta === "HOBBIE") {
        progresso -= 1;

        salvarCheckpoint();

        alert(
            `Sem ser vista pelos técnicos, Dorsa ficou mais distante de realizar o sonho olímpico, por isso, você perdeu 1 ponto de progresso, totalizando ${progresso}, mas ainda ama o esporte, portanto, continua se dedicando e treinando nas horas vagas.`
        );

        let resposta = prompt(
            `No momento em que estava treinando, como forma de passa-tempo, Dorsa escuta barulhos horríveis, como bombas, e é nesse momento que ela percebe que a guerra se aproxima cada vez mais, tornando perigoso ficar ali. Você acha que é mais seguro para Dorsa fugir('F') ou permanecer no Irã ('P') enquanto algo mais sério não acontecer?`
        );

        fuga(resposta);
    } else if (resposta === "INTENSO") {
        progresso += 1;

        salvarCheckpoint();

        let resposta = prompt(
            `Os treinos intensivos foram ótimos, Dorsa vem melhorando cada vez mais e recebeu novamente o convite para entrar na equipe de Competição. Isso envolve treinar mais horas por dia e mais dias por semana, você acha que vale a pena? Se sim ('SIM'), senão, ('NAO').`
        );

        conviteEquipeCompeticao(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        rotinaTreinos(resposta);
    }
}

function treinoEquipe(resposta) {
    if (resposta === "F") {
        progresso -= 2;

        salvarCheckpoint();

        alert(
            `Você se equivocou na sua quietaOUconta, Dorsa foi à festa e acabou bebendo, o que fez com que ela perdesse o treino do dia seguinte. Com isso, você acaba de perder 2 pontos de progresso, totalizando ${progresso} pontos.`
        );

        jogadorPerdeu();
    } else if (resposta === "T") {
        progresso += 2;

        inventario[2] = "Responsabilidade";

        salvarCheckpoint();

        let resposta = prompt(
            `Muito bem!! Para realizarmos nossos sonho, precisamos sacrificar algumas coisas que desejamos muito. Você acaba de ganhar mais pontos de progresso na sua trajetória, totalizando ${progresso} pontos de progresso.\nCom a sua dedicação, o seu treinador viu seu potencial e te chamou para representar seu clube na sua primeira competição. Você deseja ir? ('SIM') ('NAO')`
        );

        primeiraCompeticao(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        treinoEquipe(resposta);
    }
}

function fuga(resposta) {
    if (resposta === "P") {
        alert(
            `Infelizmente, ao permanecer no Irã, os bombardeios continuaram se aproximando até atingir a sua vila, de maneira que acabou ficando soterrada pelos desmoronamentos que ocorreram, sem alternativas. A memória de Dorsa foi honrada em diversos memoriais e se tornou apenas mais um "e se.." dentro do esporte.💣`
        );

        jogadorPerdeu();
    } else if (resposta === "F") {
        progresso += 1;

        inventario[0] = "Resiliência";

        salvarCheckpoint();

        let resposta = prompt(
            `Boa quietaOUconta! A mais segura possível, tendo em vista a situação. Dorsa desenvolveu ${inventario[0]}, item que agora está armazenado na sua mochila de características. Dorsa pode fugir para a Inglaterra ('I') ou pode ir para Síria ('S'), qual você prefere?`
        );

        chegadaNoRefugio(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        rotinaTreinos(resposta);
    }
}

function primeiraCompeticao(resposta) {
    if (resposta === "SIM") {
        progresso += 1;

        inventario[1] = "Coragem";

        salvarCheckpoint();

        alert(
            `Dorsa foi à competição e fez um ótimo trabalho🥳 \nEla conquistou a medalha de bronze na sua primeira competição🎖, mas isso aconteceu pois a menina que competiu contra Dorsa (Samira) havia comprado a arbitragem para que eles a ajudassem.\nVocê também ganhou um ponto de progresso, totalizando ${progresso} pontos. Além disso, ela desenvolveu ${inventario[1]}, item que agora está armazenado na sua mochila de características.`
        );

        let resposta = prompt(
            `Dorsa ganhou bastante destaque com essa competição e foi convidada a ir para um novo clube. Você deseja que Dorsa mude de clube? ('SIM') ('NAO')`
        );

        mudancaDeClube(resposta);
    } else if (resposta === "NAO") {
        progresso -= 1;

        salvarCheckpoint();

        alert(
            `Ao recusar a competição, Dorsa foi vista como alguém sem espírito competitivo, dificultando sua permanência na equipe e, como consequência, foi afastada da equipe. Você perdeu 1 ponto de progresso, totalizando ${progresso} pontos.`
        );

        jogadorPerdeu();
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        primeiraCompeticao(resposta);
    }
}

function mudancaDeClube(resposta) {
    if (resposta === "SIM") {
        progresso += 2;

        salvarCheckpoint();

        inventario[3] = "Autoconhecimento";

        alert(
            `Boa escolha! Agora Dorsa está em um clube com mais visibilidade e melhores oportunidades para crescer como atleta. Com isso, você ganhou +2 pontos de progresso, totalizando ${progresso} pontos. Além disso, ela desenvolveu ${inventario[3]}, item que agora está armazenado no seu inventário de características.`
        );

        let resposta = prompt(
            `É neste novo clube, que possui melhor estrutura e mais possibilidades de crescimento, que Samira, sua adversária da competição, treina. Mais do que isso, ela é a capitã da equipe de competição, o que te ddeixa abaixo dela na questão da hierarquia. Você deseja ir conversar com ela para resolver qualquer possível intriga, digite ('1'), se preferir manter as coisas como estão, digite ('2').`
        );

        conversaNPC(resposta);

    } else if (resposta === "NAO") {
        progresso -= 1;

        salvarCheckpoint();

        alert(
            `Infelizmente, ao recusar a mudança de clube, Dorsa acabou não recebendo as oportunidades necessárias para crescer na carreira. Você perdeu 1 ponto de progresso, totalizando ${progresso} pontos.`
        );

        jogadorPerdeu();

    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        mudancaDeClube(resposta);
    }
}

function conversaNPC(resposta) {
    //Iniciando interação com NPC

   
    if (resposta == 1) {
        alert(
            `Dorsa: "Olá Samira! Tudo bem?\nSamira:"Oii Dorsa! Você foi simplesmente incrível na última competição, por um momento acreditei que iria me ganhar.`
        );

        let opcaoResposta = prompt(
            `Digite o número da resposta desejada:\n('1') Até parece! Você nunca iria perder comprando os juízes, você não tem vergonha de me falar isso?\n('2') É, realmente eu estava no meu dia naquela competição, e é uma honra poder treinar ao lado de uma jogadora tão qualificada!`
        );
        escolherResposta(opcaoResposta)

        
    }
    else if (resposta == 2) {

        progresso -= 1

        alert(`Com medo de que Dorsa contassse aos treinadores sobre a compra da arbitragem, a capitã, Samira, retirou o nome de Dorsa da relação da equipe, fazendo com que os treinadores resconsiderassem o convite e a recusassem no clube. Com isso, você acaba de perder 1 ponto de progresso. Totalizando: ${progresso} pontos.`)

        salvarCheckpoint()
        jogadorPerdeu()

    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );
    }
}

function escolherResposta(opcaoResposta){

    if (opcaoResposta == 1) {
        alert(
            `Samira: "Você só está esquecendo de uma coisa, a capitã deste time sou eu, eu que decido quem entra e quem sai. Além disso, NUNCA mais ouse falar que comprei a arbitragem, se isso sair daqui eu acabo com você, e aí vai ter que dizer tchau pro Badminton.`
        );

       let quietaOUconta = prompt(
            `Você deseja que Dorsa fique quieta a respeito do que acabou de confirmar, para que dessa forma consiga a vaga na equipe ('1') ou acha que ela deve contar ao treinador o mais rápido possível ('2')`
        );

        repercucaoDiscussao(quietaOUconta);

    } else if (opcaoResposta == 2) {

        contarSobreDiscussao()
    
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        conversaNPC();
    }

}

function contarSobreDiscussao(){
    
    let confereInventario = inventario.includes("Espirito Esportivo");

    if (confereInventario == true) {
        alert(
            `Samira: "Imagina! Tenho certeza que vamos evoluir muito juntas, vou garantir que você esteja na equipe, Dorsa! Inclusive, acho que há uma oportunidade incrível para você...`
        );

        oportunidadeOlimipica();
    } else {
        alert(
            `Você não possui a caracterítica chave para colher os frutos de um bom Network.`
        );
    }

}

function repercucaoDiscussao(quietaOUconta) {

    if (quietaOUconta == 1) {
        //ficar quieta para manter a vaga
    }
    else if (quietaOUconta == 2) {

        inventario.push('Honestidade')

        progresso += 1

        alert(`Dorsa conta ao treinador e desenvolve Honestidade, fazendo com que o treinador confie ainda mais nela. Ele expulsa Samira da equipe e te coloca como capitã no lugar dela. Cada vez mais você vem ajudando Dorsa a conquistar seu espaço no badminton.`)

        oportunidadeOlimipica()
    }else{
        
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );
    }
}

function oportunidadeOlimipica() {
    alert(`AAAAAAAAA TESTEEEE`)
}

function jogadorGanhou() {

    alert(
        `Parabéns!! Você conseguiu ajudar Dorsa a realizar o seu sonho de entrar para o Time Olímpico. 🏅 Com o seu auxílio, Dorsa desenvolveu características importantes para sua jornada: ${inventario.join(", ")}.`
    );
}

function jogadorPerdeu() {

    let resposta = prompt(
        `Parece que Dorsa não conseguiu realizar seu sonho dessa vez. Você deseja voltar para o último checkpoint ('1') ou encerrar a partida ('2')?`
    );

    if (resposta == 1) {
        carregarCheckpoint();

        inicio(); // Recomeça a partir do início com o progresso salvo.

    } else if (resposta == 2) {

        alert("Você não conseguiu ajudar Dorsa, mas não desista! Até mais👋");

        let resposta = prompt(`🔁Deseja reiniciar? Sim ('S') ou não ('N')?🔁`);

        if (resposta === "S") {

            intro();

        } else {

            alert(`Está perdendo um ótimo jogo, mas tudo bem🤷`);

        }
    } else {

        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`);

        jogadorPerdeu();
    }
}

intro(); // Inicia o jogo

// dúvidas:
// -checkpoint(como colocar em laço de repetição)
// -else está voltando como laço infinito e não retornando para a função inicio()