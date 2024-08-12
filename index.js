// Projeto Interdisciplinar - Jogo Refugiados

let progresso = 0
let mochila= []

// Função para receber o jogador, introduzindo o tema do jogo.
function intro(){
    
    let resposta = prompt(`⭢Bem-vindo ao ***********! A incrível jornada de Dorsa Yavarivafa te aguarda e é você quem vai decidir se Dorsa realizará seu sonho ou acabará frustrada.\n⭢Digite 'VAMOS' para ajudar nossa atleta a chegar ao Time Olímpico ou digite 'DEPOIS' para jogar em outro momento.`)

    if(resposta==='VAMOS'){
        
        inicio()

    }else if(resposta=== 'DEPOIS'){
       
        console.log(`Que pena! Te aguardo em outro momento. Até mais!👋`)

    }else{
        
        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitador dentro dos parênteses.`)
       
        intro()
    }

}
intro()

function inicio(){
    let resposta =  prompt(`Dorsa faz parte de uma família que valoriza muito a cultura esportiva. Seus pais perguntaram à menina se deseja experimentar um novo esporte: Badminton. Você deseja fazer uma aula experimental (digite 'SIM') ou não tem interesse (digite 'NAO').`)

    if(resposta=='SIM'){
        progresso= progresso + 1
        
        alert(`Uhuulll! Isso é ótimo! Dorsa fez a aula experimental e amou, além disso, demonstrou ter um talento notável no Badminton. Com essa decisão, você acabou de ganhar +1 ponto de progresso, o que te leva mais perto de realizar o seu sonho.\nVocê, atualmente, tem ${progresso} pontos de progresso.`)
        
        let resposta = prompt(`Uma nova etapa da jornada se inicia, Dorsa foi convidada para fazer parte da equipe de competição no clube o qual treina. Isso envolve treinar mais horas por dia e mais dias por semana, você acha que vale a pena? Se sim ('SIM'), senão, ('NAO').`)
        
        conviteEquipeCompeticao(resposta)

    }else if(resposta=='NAO'){
       
        jogadorPerdeu()

    }else{
        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado dentro dos parênteses.`)

        inicio(resposta)
    }
}

function conviteEquipeCompeticao(){
    if(resposta=='SIM'){

        progresso= progresso + 1

        alert('Bem-vindo à equipe! 🎉 Estão muito felizes em ter Dorsa com a equipe para essa jornada no badminton. Aqui, todos são apaixonados pelo esporte e estão sempre prontos para ajudar uns aos outros a crescer e melhorar. Dorsa sabe que pode contar com eles para o que precisar, seja para treinar, trocar ideias ou até para aqueles momentos de descontração. Vamos com tudo! 💪🏸')

        alert(`Com essa decisão, você ajudou Dorsa a se aproximar do Time Olímpico, por isso, ganhou +1 ponto de progresso totalizando, ${progresso} pontos.`)

        let resposta = prompt(`No seu primeiro dia na equipe de competição, uma das colegas de time de Dorsa a convida para uma festa. De todas as meninas da equipe, ela é a que tem um pior desempenho nas quadras, tendo uma fama ruim por parte dos treinadores. Ao mesmo tempo, a capitã da equipe convida Dorsa para fazer um treino de preparação física com ela no mesmo horário da festa. Qual programa você prefere para ter na sua sexta a noite? Festa('F') ou treinamento?('T')`)

        treinoEquipe(resposta)

    }else if(resposta==='NAO'){        
        progresso = progresso - 1

        alert(`Tudo bem, as vezes inicar na vida de atleta competitivo é uma decisão complicada. Vamos esperar mais um pouco. Você acaba de perder 1 ponto na jornada olímpica, agora você possui ${progresso} pontos. `)
        
        let resposta =prompt(`Apesar de não entrar na equipe, Dorsa ainda possui o sonho olímpico. Para isso, você acredita que ela deva manter os treinos intensivos ('INTENSO') ou jogar apenas por hobbie ('HOBBIE')?`)

        rotinaTreinos(resposta)
    }else{
        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitador dentro dos parênteses.`)
        
        conviteEquipeCompeticao(resposta)
    }

}

function rotinaTreinos (){
    
    progresso= progresso - 1
     
    if (resposta=== 'HOBBIE'){
        alert(`Sem ser vista pelos técnicos, Dorsa ficou mais distante de realizar o sonho olímpico, por isso, você perdeu 1 ponto de progresso, totalizando ${progresso}, mas ainda ama o esporte, portanto, continua se dedicando e treinando nas horas vagas.`)
        
        let resposta= prompt(`No momento em que estava treinando, como forma de passa-tempo, Dorsa escuta barulhos horríveis, como bombas, e é nesse momento que ela percebe que a guerra se aproxima cada vez mais, tornando perigoso ficar ali. Você acha que é mais seguro para Dorsa fugir('F') ou permanecer no Irã ('P') enquanto algo mais sério não acontecer?`)

        fuga(resposta)

     }else if(resposta==='INTENSO'){
        progresso= progresso+1

        let resposta =prompt(`Os treinos intensivos foram ótimos, Dorsa vem melhorando cada vez mais e recebeu novamente o convite para entrar na equipe de Competição. Isso envolve treinar mais horas por dia e mais dias por semana, você acha que vale a pena? Se sim ('SIM'), senão, ('NAO').`)
        
        conviteEquipeCompeticao(resposta)

     }else{
        
        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado dentro dos parênteses.`)
        
        rotinaTreinos(resposta)
     }
}

function treinoEquipe(){
    if(resposta === 'F'){
        progresso = progresso-2
        
        alert(`Você se equivocou na sua decisão, Dorsa foi à festa e acabou bebendo, o que fez com que ela perdesse o treino do dia seguinte. Com isso, você acaba de perder 2 pontos de progresso, totalizando ${progresso} pontos.`)
       
        jogadorPerdeu(resposta)
    }
    else if(resposta==='T'){
        progresso= progresso+2

        mochila[2]= 'Autenticidade'

        let resposta= prompt(`Muito bem!! Para realizarmos nossos sonho, precisamos sacrificar algumas coisas que desejamos muito. Você acaba de ganhar mais pontos de progresso na sua trajetória, totalizando ${progresso} pontos de progresso.\nCom a sua dedicação, o seu treinador viu seu potencial e te chamou para representar seu clube  na sua primeira competição. Você deseja ir? ('SIM') ('NAO')`)
        
        primeiraCompeticao(resposta)

    }else{

        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado dentro dos parênteses.`)
        
        treinoEquipe(resposta)
    }
}

function fuga (){
    
    if(resposta=== 'P'){
        
        alert(`Infelizmente, ao permanecer no Irã, o bombardeio continuou se aproximando até atingir a sua vila, de maneira que acabou ficando soterrada pelos desmoronamentos que ocorreram, sem alternativas. A memória de Dorsa foi honrada em diversos memoriais e se tornou apenas mais um "e se..' dentro do esporte.`)
       
        jogadorPerdeu()

    } else if(resposta=== 'F'){

        progresso= progresso+1

        mochila[0]= 'Resiliência'

        let resposta = prompt(`Boa decisão! A mais segura possível, tendo em vista a situação. Dorsa desenvolveu ${mochila[0]}, item que agora está armazenado na sua mochila de características. Dorsa pode fugir para a Inglaterra ('I') ou pode ir para Síria ('S'), qual você prefere?`)

        chegadaNoRefugio(resposta)

    }else{
       
        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado dentro dos parênteses.`)
        
        rotinaTreinos(resposta)
    }
}

function primeiraCompeticao(){
    if(resposta=== 'SIM'){

        progresso= progresso+1
        mochila[1]= 'Coragem'

        alert(`Dorsa foi à competição e fez um ótimo trabalho🥳 \nEla conquistou a medalha de prata em sua primeira competição. Infelizmente, perdeu o último jogo, por roubo da sua adversária. O juíz não marcou nenhuma das faltas conforme o regulamento e Dorsa teve que se segurar para não iniciar uma briga. Porém, isso não foi suficiente para mudar a impressão dos olheiros que estavam presentes no jogo.\nCom esssa decisão, você ganhou +1 ponto de progresso em direção ao sonho olímpico, totalizando ${progresso} pontos. `)
        
        let resposta = prompt(`Na cerimônia de premiação, a campeã da competição convidou Dorsa para fazer uma foto juntas, o ódio da segunda colocada era palpável, você acha que Dorsa deve tirar a foto com sua adversária? Sim ('S') ou não ('N')?`)

        tirarFoto(resposta)

    }else if(resposta=== 'NAO'){
        alert(`No momento em que se recusa a participar da competição, o técnico passa a acreditar que na verdade Dorsa tem medo, por isso não é um bom investimento para a equipe. Isso te deixa mais longe do seu sonho olímpico, perdendo 1 ponto de progresso. Atualmente, você tem ${progresso} pontos de progresso.`)

        let resposta = prompt(`Você deseja conversar com seu técnico nesse momento para esclarecer seus motivos ('1') ou prefere pensar até amanhã antes de decidir o que fazer('2')`)

        conversarComTreinador(resposta)

    }
}

function chegadaNoRefugio(){

}

function tirarFoto(){

}

function conversarComTreinador(){
    
    if(resposta== 1){

        alert(`Conforme Dorsa anda até o escritório do treinador, um bombardeio se inicia e ela não consegue correr antes que uma explosão atinja Dorsa e a deixe apagada.`)
    
        jogadorPerdeu()

    }else if(resposta== 2){
        
        alert(`Dorsa dormiu uma noite de sono`)
    }
    
}

function jogadorPerdeu(){
    alert('Você não conseguiu ajudar Dorsa, mas não desista! Até mais👋')
   
    let resposta= prompt(`Deseja reiniciar? Sim ('S') ou não ('N')?`)

    if(resposta=== 'S'){
       
        intro()
   
    }else{
       
        alert(`Está perdendo um ótimo jogo, mas tudo bem🤷`)
    }
    }
