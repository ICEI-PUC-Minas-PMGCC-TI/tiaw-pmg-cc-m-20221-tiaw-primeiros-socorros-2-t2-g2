(function () {
    var questoes = [{
        questao: "Diante de uma Crise Convulsiva, NÃO devemos:",
        choices: ["Retirar objetos pessoais, como óculos e colares.", "Afastar objetos ao redor da vítima.", "Afrouxar as roupas e deixar a vítima se debater.", "Transportar a vítima para um local arejado e calmo, puxar a língua do convulsionado para fora a fim de evitar complicações respiratórias.", "Manter a vítima em decúbito dorsal e cabeça lateralizada."],
        correctAnswer: 3
    }, {
        questao: "Еm саѕо dе асіdеntе grаvе, а vítіmа роdе арrеѕеntаr hеmоrrаgіа іntеrnа dеvіdо ао аltо іmрасtо соntrа órgãоѕ аbdоmіnаіѕ. Grаndеѕ реrdаѕ ѕаnguínеаѕ роdеm lеvаr а vítіmа ао СНОQUЕ, quе роdе ѕеr іdеntіfісаdо quаndо há: ",
        choices: ["Alteração do nível de consciência, palidez cutânea, diminuição da frequência respiratória e diminuição da frequência cardíaca.", "Alteração do nível de consciência, vermelhidão cutânea, aumento da frequência respiratória e diminuição da frequência cardíaca;", "Alteração do nível de consciência, palidez cutânea, aumento da frequência respiratória e aumento da frequência cardíaca;"],
        correctAnswer: 0
    }, {
        questao: "Qual procedimento é indicado para o controle de uma hemorragia externa?",
        choices: ["Compressa de gelo.", "Curativo compressivo.", "Torniquete e enfaixamento.", "Limpar o ferimento e aplicar solução antisséptica."],
        correctAnswer: 1
    }, {
        questao: "Qual é o local do corpo adequado para realizar a Compressão Cardíaca?",
        choices: ["Na parte superior do peito (tórax) perto das clavículas.", "Em qualquer local do peito (tórax).", "Sobre o coração, no lado esquerdo do peito (região do tórax).", "Sobre o osso do meio do peito (esterno), na altura entre os mamilos."],
        correctAnswer: 3
    }, {
        questao: "Assinale as alternativas que caracterizam um Desmaio e a forma correta de socorrer a vítima: Escolha uma e confira as outras na resposta.",
        choices: ["Jamais eleve as pernas da vítima para cima, isso pode piorar o estado de inconsciência.", "Ajude a vítima a se levantar e ofereça água fresca.", "Pode ser causada por hipoglicemia, cansaço excessivo, dor, susto, mudança súbita de posição.", "Perda súbita, temporária e repentina da consciência.", "Ѕеntе а vítіmа еm umа саdеіrа, соlоquе ѕuа саbеçа еntrе аѕ сохаѕ, fаçа рrеѕѕãо еm ѕuа nuса раrа bаіхо соm а раlmа dа mãо еnquаntо еlа fоrçа а саbеçа раrа сіmа роr аlgunѕ ѕеgundоѕ. Rеріtа 3 vеzеѕ"],
        correctAnswer: 2
    }];

    var questaoCounter = 0; 
    var selections = []; 
    var quiz = $('#quiz'); 

    displayNext();

    $('#next').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        if (isNaN(selections[questaoCounter])) {
            alert('Marque uma alternativa');
        } else {
            questaoCounter++;
            displayNext();
        }
    });

    $('#prev').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questaoCounter--;
        displayNext();
    });

    $('#start').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questaoCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    function createquestaoElement(index) {
        var qElement = $('<div>', {
            id: 'questao'
        });

        var header = $('<h2>#' + (index + 1) + '</h2>');
        qElement.append(header);

        var questao = $('<p>').append(questoes[index].questao);
        qElement.append(questao);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questoes[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questoes[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    function choose() {
        selections[questaoCounter] = +$('input[name="answer"]:checked').val();
    }

    function displayNext() {
        quiz.fadeOut(function () {
            $('#questao').remove();

            if (questaoCounter < questoes.length) {
                var nextquestao = createquestaoElement(questaoCounter);
                quiz.append(nextquestao).fadeIn();
                if (!(isNaN(selections[questaoCounter]))) {
                    $('input[value=' + selections[questaoCounter] + ']').prop('checked', true);
                }

                if (questaoCounter === 1) {
                    $('#prev').show();
                } else if (questaoCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    function displayScore() {
        var score = $('<p>', { id: 'questao' });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questoes[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('Você acertou ' + numCorrect + ' questoes de ' +
            questoes.length );
        return score;
    }
})();